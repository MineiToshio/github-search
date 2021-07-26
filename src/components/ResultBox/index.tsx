import React from 'react';
import { Container } from './styles';

type Props = {
  children: React.ReactNode;
  padding: string;
}

const ResultBox = ({ children, padding }: Props) => (
  <Container padding={padding}>
    {children}
  </Container>
);

export default ResultBox;
