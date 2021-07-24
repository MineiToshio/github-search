import styled from 'styled-components';

type Props = {
  size: number;
}

export const Vertical = styled.div<Props>`
  height: ${(p) => p.size}px;
  min-height: ${(p) => p.size}px;
`;

export const Horizontal = styled.div<Props>`
  width: ${(p) => p.size}px;
  min-width: ${(p) => p.size}px;
  display: inline-block;
`;
