import React, { useEffect, useState } from 'react';
import LoginGithub from 'react-login-github';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import { Button } from '../../core/Button/styles';
import constants from '../../utils/constants';
import { getGithubAccessToken } from './utils';
import useCurrentUser from '../../hooks/useCurrentUser';
import { Loading } from '../../components';
import { CONTEXT_STATUS } from '../../context/UserContext';

type GithubResponse = {
  code: string;
}

const Login = () => {
  const history = useHistory();
  const { currentUser, login, status } = useCurrentUser();
  const [isLoading, setIsLoading] = useState(status !== CONTEXT_STATUS.FINISHED);

  useEffect(() => {
    if (currentUser) {
      history.push('/search');
    }
  }, [currentUser]);

  useEffect(() => {
    if (status === CONTEXT_STATUS.FINISHED) {
      setIsLoading(false);
    }
  }, [status]);

  const onSuccess = async (res: GithubResponse) => {
    setIsLoading(true);
    const githubCode = res.code;
    const accessToken = await getGithubAccessToken(githubCode);
    login(accessToken);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Button
        as={LoginGithub}
        clientId={constants.githubClientId}
        onSuccess={onSuccess}
        buttonText="Login to Github"
        redirectUri=""
      />
    </Container>
  );
};

export default Login;
