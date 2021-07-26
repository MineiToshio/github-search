import React from 'react';
import { Text, Spacer } from '../../core';
import { Container } from './styles';
import Pagination from '../Pagination';

type Props = {
  title: string;
  onNextClick: () => void;
  onPreviousClick: () => void;
  isNextDisabled: boolean;
  isPreviousDisabled: boolean;
  children: React.ReactNode;
}

const RepositoryResults = ({
  title,
  onNextClick,
  onPreviousClick,
  isNextDisabled,
  isPreviousDisabled,
  children,
}: Props) => (
  <Container>
    <Text color="black" fontSize="xl" lineHeight="30px" fontWeight="bold" as="h2">
      {title}
    </Text>
    <Spacer direction="vertical" size={25} />
    {children}
    <Spacer direction="vertical" size={65} />
    <Pagination
      onNextClick={onNextClick}
      onPreviousClick={onPreviousClick}
      isNextDisabled={isNextDisabled}
      isPreviousDisabled={isPreviousDisabled}
    />
    <Spacer direction="vertical" size={40} />
  </Container>
);

export default RepositoryResults;
