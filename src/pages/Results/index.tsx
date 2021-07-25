import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Spacer } from '../../core';
import { Header } from '../../components';
import { Container } from './styles';

const Results = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchQuery = query.get('q');
  const [searchValue, setSearchValue] = useState(searchQuery ?? '');

  // TODO: Implement search function
  const onSearch = () => { };

  return (
    <>
      <Header searchValue={searchValue} onSearchValueChange={setSearchValue} onSearch={onSearch} />
      <Container>
        <Spacer direction="vertical" size={30} />
      </Container>
    </>
  );
};

export default Results;
