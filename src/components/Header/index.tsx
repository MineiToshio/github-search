import React from 'react';
import {
  Header,
  Logo,
  UserPhoto,
  UserContainer,
  Icon,
} from './styles';
import { Text } from '../../core';
import logo from '../../img/logo.svg';
import chevronDown from '../../img/chevron-down.svg';
import useCurrentUser from '../../hooks/useCurrentUser';

const HeaderComponent = () => {
  const { currentUser } = useCurrentUser();
  return (
    <Header>
      <Logo src={logo} alt="Github" />
      <UserContainer>
        <UserPhoto src={currentUser?.photo} alt={currentUser?.name} />
        <Text fontFamily="user" color="text2" fontSize="lg" lineHeight="19px">{currentUser?.name}</Text>
        <Icon src={chevronDown} alt="down" />
      </UserContainer>
    </Header>
  );
};

export default HeaderComponent;
