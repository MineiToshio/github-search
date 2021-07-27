import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import type { User as UserType } from '../types';
import { GET_USER } from '../utils/queries';
import constants from '../utils/constants';
import { UserData } from '../types/github';

export enum CONTEXT_STATUS {
  INITIALIZING = 0,
  FETCHING = 1,
  FINISHED = 2,
}

type User = UserType | null;

type ContextProps = {
  currentUser: User;
  status: CONTEXT_STATUS;
  login: (accessToken: string) => void;
  logout: () => void;
};

type ProviderProps = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const UserContext = React.createContext<ContextProps>({
  currentUser: null,
  status: CONTEXT_STATUS.INITIALIZING,
  login: () => { },
  logout: () => { },
});

const UserContextProvider = ({ children }: ProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User>(null);
  const [status, setStatus] = useState(CONTEXT_STATUS.INITIALIZING);
  const [
    getUser,
    {
      data: user,
      loading: isFetchingUser,
      client,
    }] = useLazyQuery<UserData>(GET_USER);

  useEffect(() => {
    if (status === CONTEXT_STATUS.FETCHING && !isFetchingUser) {
      setStatus(CONTEXT_STATUS.FINISHED);
    }
  }, [isFetchingUser]);

  useEffect(() => {
    const accessToken = localStorage.getItem(constants.localStorageKeys.accessToken);
    if (accessToken) {
      setStatus(CONTEXT_STATUS.FETCHING);
      getUser();
    } else {
      setStatus(CONTEXT_STATUS.FINISHED);
    }
  }, []);

  const login = (accessToken: string) => {
    // Since the access token is a sensitive data,
    // it's not a good idea to store it in local storage.
    // Probably, it should be stored in the backend using JWT o something similar.
    // Just doing it for the sake of simplicity.
    window.localStorage.setItem(constants.localStorageKeys.accessToken, accessToken);
    setStatus(CONTEXT_STATUS.FETCHING);
    getUser();
  };

  const logout = () => {
    localStorage.removeItem(constants.localStorageKeys.accessToken);
    setCurrentUser(null);
    client?.clearStore();
  };

  useEffect(() => {
    if (user) {
      const { viewer: { name, avatarUrl } } = user;
      setCurrentUser({
        name,
        photo: avatarUrl,
      });
    } else {
      setCurrentUser(null);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{
      currentUser,
      login,
      status,
      logout,
    }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
