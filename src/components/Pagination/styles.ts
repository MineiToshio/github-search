import styled from 'styled-components';

type Props = {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
`;

export const PageNumber = styled.button<Props>`
  padding: 0;
  border: 0;
  background: none;
  cursor: ${(p) => (p.selected ? 'initial' : 'pointer')};
`;
