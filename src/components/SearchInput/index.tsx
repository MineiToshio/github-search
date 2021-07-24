import React from 'react';
import {
  Container,
  Input,
  Icon,
  Button,
} from './styles';
import { Spacer } from '../../core';
import search from '../../img/search.svg';

type Props = {
  value: string;
  onChange: (newVal: string) => void;
  onSearch: () => void;
  size?: 'normal' | 'big';
  placeholder?: string;
}

const SearchInput = ({
  value,
  onChange,
  onSearch,
  size = 'normal',
  placeholder = '',
}: Props) => (
  <Container size={size}>
    <Input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    <Spacer direction="horizontal" size={10} />
    <Button onClick={onSearch}>
      <Icon src={search} alt="search" />
    </Button>
  </Container>
);

export default SearchInput;
