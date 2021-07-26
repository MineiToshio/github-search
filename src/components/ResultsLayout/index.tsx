import React from 'react';
import { Text, Spacer } from '../../core';
import { Container } from './styles';
import Pagination from '../Pagination';

type Props = {
  title: string;
  onNextClick: () => void;
  onPreviousClick: () => void;
  onPageNumberClick: (pageNumber: number) => void;
  isNextDisabled: boolean;
  isPreviousDisabled: boolean;
  totalResultsNumber: number;
  currentPageNumber: number;
  children: React.ReactNode;
}

const ResultsLayout = ({
  title,
  onNextClick,
  onPreviousClick,
  onPageNumberClick,
  isNextDisabled,
  isPreviousDisabled,
  totalResultsNumber,
  currentPageNumber,
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
      onPageNumberClick={onPageNumberClick}
      isNextDisabled={isNextDisabled}
      isPreviousDisabled={isPreviousDisabled}
      currentPageNumber={currentPageNumber}
      totalResultsNumber={totalResultsNumber}
    />
    <Spacer direction="vertical" size={40} />
  </Container>
);

export default ResultsLayout;
