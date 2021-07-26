import React, { useEffect, useRef } from 'react';
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
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <Container size={size}>
      <Input type="text" value={value} onChange={(e) => onChange(e.target.value)} onKeyUp={onKeyUp} placeholder={placeholder} ref={inputRef} />
      <Spacer direction="horizontal" size={10} />
      <Button onClick={onSearch}>
        <Icon src={search} alt="search" />
      </Button>
    </Container>
  );
};

export default SearchInput;
