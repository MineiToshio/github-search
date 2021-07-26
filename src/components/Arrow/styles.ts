import styled from 'styled-components';
import theme from '../../styles/theme';

type Props = {
  disabled: boolean;
};

export const Button = styled.button<Props>`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${(p) => (p.disabled ? theme.colors.bg2 : theme.colors.black)};
  padding: 8px;
  border: 0;
  cursor: ${(p) => (p.disabled ? 'initial' : 'pointer')};
`;

export const Icon = styled.img<Props>`
  // This filter is to change svg color
  filter: ${(p) => (p.disabled
    ? 'invert(85%) sepia(9%) saturate(299%) hue-rotate(179deg) brightness(85%) contrast(89%)' // #B0B7C3 color
    : 'invert(99%) sepia(0%) saturate(0%) hue-rotate(179deg) brightness(102%) contrast(102%);' // white color
  )};
`;
