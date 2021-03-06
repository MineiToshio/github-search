import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  Logo,
  UserPhoto,
  UserContainer,
  Icon,
  Triangle,
  Button,
  Menu,
} from './styles';
import { Text, Spacer } from '../../core';
import SearchInput from '../SearchInput';
import logo from '../../img/logo.svg';
import chevronDown from '../../img/chevron-down.svg';
import useCurrentUser from '../../hooks/useCurrentUser';

type FullHeaderProps = {
  onlyUserNav?: false;
  searchValue: string;
  onSearchValueChange: (newVal: string) => void;
  onSearch: () => void;
}

type OnlyUserNavProps = {
  onlyUserNav: true;
  searchValue?: undefined;
  onSearchValueChange?: undefined;
  onSearch?: undefined;
}

type Props = FullHeaderProps | OnlyUserNavProps

const HeaderComponent = ({
  searchValue = '',
  onSearchValueChange = () => { },
  onSearch = () => { },
  onlyUserNav = false,
}: Props) => {
  const { currentUser, logout } = useCurrentUser();
  const [showMenu, setShowmenu] = useState(false);

  const toggleMenu = () => setShowmenu(!showMenu);

  return (
    <Header onlyUserNav={onlyUserNav}>
      {!onlyUserNav && (
        <>
          <Link to="/search">
            <Logo src={logo} alt="Github" />
          </Link>
          <SearchInput value={searchValue} onChange={onSearchValueChange} onSearch={onSearch} placeholder="Search" />
        </>
      )}
      <UserContainer onClick={toggleMenu}>
        <UserPhoto src={currentUser?.photo} alt={currentUser?.name} />
        <Spacer direction="horizontal" size={10} />
        <Text fontFamily="user" color="text2" fontSize="lg" lineHeight="19px">{currentUser?.name}</Text>
        <Spacer direction="horizontal" size={10} />
        <Icon src={chevronDown} alt="down" />
      </UserContainer>
      {showMenu && (
        <Menu>
          <Triangle />
          <Button onClick={logout}>
            <Text color="text5" fontSize="lg" lineHeight="21px">Logout</Text>
          </Button>
        </Menu>
      )}
    </Header>
  );
};

export default HeaderComponent;
