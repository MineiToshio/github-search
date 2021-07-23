import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const useCurrentUser = () => {
  const contextData = useContext(UserContext);
  return contextData;
};

export default useCurrentUser;
