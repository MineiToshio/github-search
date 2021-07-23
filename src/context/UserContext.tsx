import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import type { User as UserType } from '../types';
import { GET_USER } from '../utils/queries';
import constants from '../utils/constants';
import { UserData } from '../types/github';

type User = UserType | null;

type ContextProps = {
  currentUser: User;
  login: (accessToken: string) => void;
};

type ProviderProps = {
  children: React.ReactNode | React.ReactNodeArray;
};

export const UserContext = React.createContext<ContextProps>({
  currentUser: null,
  login: () => { },
});

const UserContextProvider = ({ children }: ProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User>(null);
  const [getUser, { data: user }] = useLazyQuery<UserData>(GET_USER);

  useEffect(() => {
    const accessToken = localStorage.getItem(constants.localStorageKeys.accessToken);
    if (accessToken) {
      getUser();
    }
  }, []);

  const login = (accessToken: string) => {
    // Since the access token is a sensitive data,
    // it's not a good idea to store it in local storage.
    // Probably, it should be stored in the backend using JWT o something similar.
    // Just doing it for the sake of simplicity.
    window.localStorage.setItem(constants.localStorageKeys.accessToken, accessToken);
    getUser();
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
    <UserContext.Provider value={{ currentUser, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
