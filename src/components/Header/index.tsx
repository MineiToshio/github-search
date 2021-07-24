import React from 'react';
import {
  Header,
  Logo,
  UserPhoto,
  UserContainer,
  Icon,
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
  const { currentUser } = useCurrentUser();
  return (
    <Header onlyUserNav={onlyUserNav}>
      {!onlyUserNav && (
        <>
          <Logo src={logo} alt="Github" />
          <SearchInput value={searchValue} onChange={onSearchValueChange} onSearch={onSearch} placeholder="Search" />
        </>
      )}
      <UserContainer>
        <UserPhoto src={currentUser?.photo} alt={currentUser?.name} />
        <Spacer direction="horizontal" size={10} />
        <Text fontFamily="user" color="text2" fontSize="lg" lineHeight="19px">{currentUser?.name}</Text>
        <Spacer direction="horizontal" size={10} />
        <Icon src={chevronDown} alt="down" />
      </UserContainer>
    </Header>
  );
};

export default HeaderComponent;
