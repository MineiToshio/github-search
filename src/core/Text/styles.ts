import styled from 'styled-components';
import theme, {
  FontFamily,
  FontWeight,
  FontSize,
  Color,
} from '../../styles/theme';

type Props = {
  color: Color;
  fontWeight: FontWeight;
  fontFamily: FontFamily;
  fontSize: FontSize;
  lineHeight: string;
}

export const Text = styled.span<Props>`
  margin: 0;
  color: ${(p) => theme.colors[p.color]};
  font-family: ${(p) => theme.font.family[p.fontFamily]};
  font-weight: ${(p) => theme.font.weight[p.fontWeight]};
  font-size: ${(p) => theme.font.size[p.fontSize]};
  line-height: ${(p) => p.lineHeight};
`;
