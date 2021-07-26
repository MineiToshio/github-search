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
  onRepositoryPageNumberClick: (pageNumber: number) => void;
  isRepositoryNextDisabled: boolean;
  isRepositoryPreviousDisabled: boolean;
  currentRepositoryPageNumber: number;
  onUserNextClick: () => void;
  onUserPreviousClick: () => void;
  onUserPageNumberClick: (pageNumber: number) => void;
  isUserNextDisabled: boolean;
  isUserPreviousDisabled: boolean;
  currentUserPageNumber: number;
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
  onRepositoryPageNumberClick,
  isRepositoryNextDisabled,
  isRepositoryPreviousDisabled,
  currentRepositoryPageNumber,
  onUserNextClick,
  onUserPreviousClick,
  onUserPageNumberClick,
  isUserNextDisabled,
  isUserPreviousDisabled,
  currentUserPageNumber,
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
          onPageNumberClick={onRepositoryPageNumberClick}
          isNextDisabled={isRepositoryNextDisabled}
          isPreviousDisabled={isRepositoryPreviousDisabled}
          currentPageNumber={currentRepositoryPageNumber}
        />
      ) : (
        <UserResults
          userCount={userCount}
          users={users}
          onNextClick={onUserNextClick}
          onPreviousClick={onUserPreviousClick}
          onPageNumberClick={onUserPageNumberClick}
          isNextDisabled={isUserNextDisabled}
          isPreviousDisabled={isUserPreviousDisabled}
          currentPageNumber={currentUserPageNumber}
        />
      )}
  </Container>
);

export default SearchResults;
