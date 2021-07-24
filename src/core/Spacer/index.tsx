import React from 'react';
import { Vertical, Horizontal } from './styles';

export type Props = {
  size: number;
  direction: 'vertical' | 'horizontal';
};

const VerticalSpacer = ({ size, direction }: Props) => (
  <>
    {direction === 'horizontal'
      ? (<Horizontal size={size} />)
      : (<Vertical size={size} />)}
  </>
);

export default VerticalSpacer;
