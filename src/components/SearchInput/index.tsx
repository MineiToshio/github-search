import React from 'react';
import {
  Container,
  Input,
  Icon,
  Button,
} from './styles';
import search from '../../img/search.svg';

type Props = {
  value: string;
  onChange: (newVal: string) => void;
  onSearch: () => void;
}

const SearchInput = ({ value, onChange, onSearch }: Props) => (
  <Container>
    <Input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search" />
    <Button onClick={onSearch}>
      <Icon src={search} alt="search" />
    </Button>
  </Container>
);

export default SearchInput;
