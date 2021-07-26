import React from 'react';
import { Text } from '../../core';
import { Container, Category, SearchCount } from './styles';
import type { SearchCategory } from '../../types';
import abbreviateNumber from '../../utils/abbreviateNumber';

type Props = {
  selectedCategory: SearchCategory;
  onCategoryClick: (category: SearchCategory) => void;
  repositoryCount: number;
  userCount: number;
};

const CATEGORIES = [
  'Repositories' as const,
  'Users' as const,
];

const Categories = ({
  selectedCategory,
  onCategoryClick,
  repositoryCount,
  userCount,
}: Props) => (
  <Container>
    {CATEGORIES.map((category) => (
      <Category
        type="button"
        onClick={() => onCategoryClick(category)}
        selected={category === selectedCategory}
      >
        <Text lineHeight="18px" fontSize="md" color="text3">{category}</Text>
        <SearchCount>
          <Text lineHeight="14px" fontSize="xs" color="text3" fontWeight="bold">
            {category === 'Repositories' ? abbreviateNumber(repositoryCount) : abbreviateNumber(userCount)}
          </Text>
        </SearchCount>
      </Category>
    ))}
  </Container>
);

export default Categories;
