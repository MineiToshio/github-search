import React from 'react';
import { Text, Spacer } from '../../core';
import { Container } from './styles';

type Props = {
  title: string;
  children: React.ReactNode;
}

const RepositoryResults = ({ title, children }: Props) => (
  <Container>
    <Text color="black" fontSize="xl" lineHeight="30px" fontWeight="bold" as="h2">
      {title}
    </Text>
    <Spacer direction="vertical" size={25} />
    {children}
  </Container>
);

export default RepositoryResults;
