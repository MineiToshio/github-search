import styled from 'styled-components';
import theme from '../../styles/theme';
import hexToRgba from '../../utils/hexToRgba';

type Props = {
  padding: string;
}

export const Container = styled.div<Props>`
  padding: ${(p) => p.padding};
  width: 100%;
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  box-shadow: 0px 6px 58px ${hexToRgba(theme.colors.shadow, 0.1)};
  border-radius: 3px;
`;
