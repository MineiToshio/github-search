import React from 'react';
import { Button, Icon } from './styles';
import chevronLeft from '../../img/chevron-left.svg';
import chevronRight from '../../img/chevron-right.svg';

type Props = {
  direction: 'right' | 'left';
  disabled: boolean;
  onClick: () => void;
}

const ICON_OPTIONS = {
  right: {
    icon: chevronRight,
    alt: 'next',
  },
  left: {
    icon: chevronLeft,
    alt: 'previous',
  },
};

const Arrow = ({ direction, disabled, onClick }: Props) => (
  <Button type="button" onClick={onClick} disabled={disabled}>
    <Icon
      src={ICON_OPTIONS[direction].icon}
      alt={ICON_OPTIONS[direction].alt}
      disabled={disabled}
    />
  </Button>
);

export default Arrow;
