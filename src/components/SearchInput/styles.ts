import styled from 'styled-components';
import theme from '../../styles/theme';

type Props = {
  size: 'normal' | 'big';
};

export const Container = styled.div<Props>`
  border: 1px solid ${theme.colors.border};
  padding: ${(p) => (p.size === 'normal' ? '10px 15px' : '15px')};
  border-radius: 100px;
  width: ${(p) => (p.size === 'normal' ? '380px' : '580px')};
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  font-size: ${theme.font.size.md};
  border: none;
  outline: none;
  padding: 0;
  width: 100%;
  color: ${theme.colors.text3};
  &::placeholder {
    color: ${theme.colors.text1};
  }
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  display: block;
`;

export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
`;
