import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  background: ${theme.colors.bg1};
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
