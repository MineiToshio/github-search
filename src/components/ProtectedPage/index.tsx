import React from 'react';
import { useHistory } from 'react-router-dom';
import { CONTEXT_STATUS } from '../../context/UserContext';
import useCurrentUser from '../../hooks/useCurrentUser';
import Loading from '../Loading';

type Props = {
  children: React.ReactNode;
}

const ProtectedPage = ({ children }: Props) => {
  const { currentUser, status } = useCurrentUser();
  const history = useHistory();
  if (status !== CONTEXT_STATUS.FINISHED) {
    return <Loading />;
  }
  if (!currentUser) {
    history.push('/');
    return null;
  }
  return <>{children}</>;
};

export default ProtectedPage;
