import React from 'react';
import { Spacer } from '../../core';
import Arrow from '../Arrow';
import { Container } from './styles';

type Props = {
  onNextClick: () => void;
  onPreviousClick: () => void;
  isNextDisabled: boolean;
  isPreviousDisabled: boolean;
}

const Pagination = ({
  onNextClick,
  onPreviousClick,
  isNextDisabled,
  isPreviousDisabled,
} : Props) => (
  <Container>
    <Arrow direction="left" onClick={onPreviousClick} disabled={isPreviousDisabled} />
    <Spacer direction="horizontal" size={19} />
    {/* TODO: Change to real pagination numbers */}
    1 2 3
    <Spacer direction="horizontal" size={19} />
    <Arrow direction="right" onClick={onNextClick} disabled={isNextDisabled} />
  </Container>
);

export default Pagination;
