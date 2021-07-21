import styled from 'styled-components';
import theme from '../../styles/theme';

export const Button = styled.button`
  background: ${theme.colors.button};
  padding: 10px 34px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: ${theme.colors.white};
  font-weight: ${theme.font.weight};
  font-size: ${theme.font.size.lg};
  line-height: 21px;
`;
