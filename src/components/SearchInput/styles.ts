import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  border: 1px solid ${theme.colors.border};
  padding: 10px 15px;
  border-radius: 100px;
  width: 360px;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  font-size: ${theme.font.size.md};
  border: none;
  outline: none;
  padding: 0;
  width: 100%;
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  display: block;
`;

export const Button = styled.button`
  margin-left:10px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
`;
