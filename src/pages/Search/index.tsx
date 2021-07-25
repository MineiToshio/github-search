import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Header, Search } from '../../components';
import { SearchContainer } from './styles';
import { Spacer } from '../../core';

const SearchPage = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');

  const onSearch = () => {
    history.push(`/results?q=${searchValue}`);
  };

  return (
    <>
      <Header onlyUserNav />
      <SearchContainer>
        <Spacer size={110} direction="vertical" />
        <Search
          searchValue={searchValue}
          onSearchValueChange={setSearchValue}
          onSearch={onSearch}
        />
      </SearchContainer>
    </>
  );
};

export default SearchPage;
