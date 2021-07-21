import React from 'react';
import { Container } from './styles';
import { Button } from '../../core';

const Login = () => {
  // TODO: Add Github login
  const onLogin = () => {

  };

  return (
    <Container>
      <Button text="Login to Github" onClick={onLogin} />
    </Container>
  );
};

export default Login;
