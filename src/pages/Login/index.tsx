import React from 'react';
import LoginGithub from 'react-login-github';
import { Container } from './styles';
import { Button } from '../../core/Button/styles';
import constants from '../../utils/constants';
import { getGithubAccessToken } from './utils';
import useCurrentUser from '../../hooks/useCurrentUser';

type GithubResponse = {
  code: string;
}

const Login = () => {
  const { login } = useCurrentUser();

  const onSuccess = async (res: GithubResponse) => {
    const githubCode = res.code;
    const accessTokenRes = await getGithubAccessToken(githubCode);
    const { data: { access_token: accessToken } } = await accessTokenRes.json();
    login(accessToken);
  };

  return (
    <Container>
      <Button
        as={LoginGithub}
        clientId={constants.githubClientId}
        onSuccess={onSuccess}
        buttonText="Login to Github"
      />
    </Container>
  );
};

export default Login;
