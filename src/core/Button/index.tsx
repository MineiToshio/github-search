import React from 'react';
import Text from '../Text';
import { Button } from './styles';

type Props = {
  text: string;
  onClick: () => void;
}

const ButtonComponent = ({
  text = '',
  onClick,
}: Props) => (
  <Button type="button" onClick={onClick}>
    <Text fontWeight="bold" color="white" lineHeight="21px" fontSize="lg">{text}</Text>
  </Button>
);

export default ButtonComponent;
