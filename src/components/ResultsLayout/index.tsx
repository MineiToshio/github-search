import React from 'react';
import { Text, Spacer } from '../../core';
import { Container } from './styles';
import Pagination from '../Pagination';

type Props = {
  title: string;
  onPageNumberClick: (pageNumber: number) => void;
  totalResultsNumber: number;
  currentPageNumber: number;
  children: React.ReactNode;
}

const ResultsLayout = ({
  title,
  onPageNumberClick,
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
      onPageNumberClick={onPageNumberClick}
      currentPageNumber={currentPageNumber}
      totalResultsNumber={totalResultsNumber}
    />
    <Spacer direction="vertical" size={40} />
  </Container>
);

export default ResultsLayout;
