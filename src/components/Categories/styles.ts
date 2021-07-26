import styled from 'styled-components';
import theme from '../../styles/theme';
import hexToRgba from '../../utils/hexToRgba';

type Props = {
  selected: boolean;
};

export const Container = styled.div`
  width: 280px;
  padding: 30px;
  background: ${theme.colors.white};
  box-shadow: 0px 6px 58px ${hexToRgba(theme.colors.shadow, 0.1)};
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  height: fit-content;
  position: sticky;
  top: 110px;
`;

export const Category = styled.button<Props>`
  background: ${(p) => (p.selected ? theme.colors.bg3 : 'transparent')};
  border: none;
  cursor: pointer;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchCount = styled.span`
  background-color: ${theme.colors.bg4};
  border-radius: 10px;
  padding: 6px;
`;
