import React from 'react';
import LoginGithub from 'react-login-github';
import { useLazyQuery } from '@apollo/client';
import { Container } from './styles';
import { Button } from '../../core/Button/styles';
import constants from '../../utils/constants';
import { getGithubAccessToken } from './utils';
import { GET_USER } from '../../utils/queries';

type GithubResponse = {
  code: string;
}

const Login = () => {
  const [getUser] = useLazyQuery(GET_USER);

  const onSuccess = async (res: GithubResponse) => {
    const githubCode = res.code;
    const accessTokenRes = await getGithubAccessToken(githubCode);
    const { data: { access_token: accessToken } } = await accessTokenRes.json();
    // Since the access token is a sensitive data, it's not a good idea to store it in local storage
    // Probably, it should be stored in the backend using JWT o something similar
    // Just doing it for the sake of simplicity
    window.localStorage.setItem(constants.localStorageKeys.accessToken, accessToken);
    getUser();
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
