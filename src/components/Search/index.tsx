import React from 'react';
import { Container, Logo } from './styles';
import logo from '../../img/logo.svg';
import SearchInput from '../SearchInput';
import { Spacer, Button } from '../../core';

type Props = {
  searchValue: string;
  onSearchValueChange: (newVal: string) => void;
  onSearch: () => void;
}

const Search = ({ searchValue, onSearchValueChange, onSearch }: Props) => (
  <Container>
    <Logo src={logo} alt="Github" />
    <Spacer size={20} direction="vertical" />
    <SearchInput value={searchValue} onChange={onSearchValueChange} onSearch={onSearch} size="big" />
    <Spacer size={30} direction="vertical" />
    <Button text="Search Github" onClick={onSearch} />
  </Container>
);

export default Search;
