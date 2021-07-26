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
  onRepositoryNextClick: () => void;
  onRepositoryPreviousClick: () => void;
  isRepositoryNextDisabled: boolean;
  isRepositoryPreviousDisabled: boolean;
  onUserNextClick: () => void;
  onUserPreviousClick: () => void;
  isUserNextDisabled: boolean;
  isUserPreviousDisabled: boolean;
};

const SearchResults = ({
  selectedCategory,
  onCategoryClick,
  repositoryCount,
  repositories,
  userCount,
  users,
  onRepositoryNextClick,
  onRepositoryPreviousClick,
  isRepositoryNextDisabled,
  isRepositoryPreviousDisabled,
  onUserNextClick,
  onUserPreviousClick,
  isUserNextDisabled,
  isUserPreviousDisabled,
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
          onNextClick={onRepositoryNextClick}
          onPreviousClick={onRepositoryPreviousClick}
          isNextDisabled={isRepositoryNextDisabled}
          isPreviousDisabled={isRepositoryPreviousDisabled}
        />
      ) : (
        <UserResults
          userCount={userCount}
          users={users}
          onNextClick={onUserNextClick}
          onPreviousClick={onUserPreviousClick}
          isNextDisabled={isUserNextDisabled}
          isPreviousDisabled={isUserPreviousDisabled}
        />
      )}
  </Container>
);

export default SearchResults;
