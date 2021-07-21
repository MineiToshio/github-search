import React from 'react';
import { Button } from './styles';

type Props = {
  text: string;
  onClick: () => void;
}

const ButtonComponent = ({
  text = '',
  onClick,
}: Props) => (
  <Button type="button" onClick={onClick}>{text}</Button>
);

export default ButtonComponent;
