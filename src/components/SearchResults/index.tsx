import React from 'react';
import { Spacer } from '../../core';
import Categories from '../Categories';
import { Container } from './styles';
import RepositoryResults from '../RepositoryResults';
import type { SearchCategory, Repository } from '../../types';

type Props = {
  selectedCategory: SearchCategory;
  onCategoryClick: (category: SearchCategory) => void;
  repositoryCount: number;
  repositories: Repository[];
  userCount: number;
};

const SearchResults = ({
  selectedCategory,
  onCategoryClick,
  repositoryCount,
  repositories,
  userCount,
}: Props) => (
  <Container>
    <Categories
      selectedCategory={selectedCategory}
      onCategoryClick={onCategoryClick}
      repositoryCount={repositoryCount}
      userCount={userCount}
    />
    <Spacer size={20} direction="horizontal" />
    <RepositoryResults
      repositoryCount={repositoryCount}
      repositories={repositories}
    />
  </Container>
);

export default SearchResults;
