import React from 'react';
import { Spacer } from '../../core';
import Categories from '../Categories';
import { Container } from './styles';
import RepositoryResults from '../RepositoryResults';
import UserResults from '../UserResults';
import type { SearchCategory, RepositoryResult, UserResult } from '../../types';

type Props = {
  selectedCategory: SearchCategory;
  onCategoryClick: (category: SearchCategory) => void;
  repositoryCount: number;
  repositories: RepositoryResult[];
  userCount: number;
  users: UserResult[];
};

const SearchResults = ({
  selectedCategory,
  onCategoryClick,
  repositoryCount,
  repositories,
  userCount,
  users,
}: Props) => (
  <Container>
    <Categories
      selectedCategory={selectedCategory}
      onCategoryClick={onCategoryClick}
      repositoryCount={repositoryCount}
      userCount={userCount}
    />
    <Spacer size={20} direction="horizontal" />
    {selectedCategory === 'Repositories'
      ? (
        <RepositoryResults
          repositoryCount={repositoryCount}
          repositories={repositories}
        />
      ) : (
        <UserResults
          userCount={userCount}
          users={users}
        />
      )}
  </Container>
);

export default SearchResults;
