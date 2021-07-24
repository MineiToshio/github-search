import React, { useState } from 'react';
import { Header, Search } from '../../components';
import { SearchContainer } from './styles';
import { Spacer } from '../../core';

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');

  // TODO: Implement search function
  const onSearch = () => {};

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
