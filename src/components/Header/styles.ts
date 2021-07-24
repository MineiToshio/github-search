import styled from 'styled-components';
import theme from '../../styles/theme';

type Props = {
  onlyUserNav?: boolean;
}

export const Header = styled.header<Props>`
  height: 80px;
  background: ${theme.colors.white};
  display: flex;
  align-items: center;
  padding: 0 130px;
  justify-content: ${(p) => (p.onlyUserNav ? 'flex-end' : 'space-between')};
`;

export const UserContainer = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 70px;
`;

export const UserPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Icon = styled.img`
  width: 12px;
  margin-left:10px;
`;
