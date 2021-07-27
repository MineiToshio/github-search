import styled from 'styled-components';
import theme from '../../styles/theme';
import hexToRgba from '../../utils/hexToRgba';

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
  position: sticky;
  top: 0;
  box-shadow: ${(p) => (p.onlyUserNav ? 'none' : `0px 0px 5px ${hexToRgba(theme.colors.shadow, 0.7)}`)};
`;

export const UserContainer = styled.button`
  display: flex;
  align-items: center;
  border: none;
  padding: 0;
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
`;

export const Icon = styled.img`
  width: 12px;
`;

export const Button = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  background: none;
  padding: 19px 37px;
  border: 3px solid ${hexToRgba(theme.colors.shadow, 0.3)};
  border-radius: 3px;
  box-shadow: 0px 6px 58px ${hexToRgba(theme.colors.shadow, 0.2)};
  background-color: ${theme.colors.white};
  width: 200px;
  text-align: left;
`;

export const Triangle = styled.div`
  position: absolute;
  top: -15px;
  right: 10px;
  width: 25px;
  height: 25px;
  transform: rotateZ(45deg)skew(30deg,30deg);
  background: red;
  border-top-left-radius: 15px;
  border-left: 4px solid ${hexToRgba(theme.colors.shadow, 0.3)};
  border-top: 4px solid ${hexToRgba(theme.colors.shadow, 0.3)};
  box-shadow: 0px 6px 58px ${hexToRgba(theme.colors.shadow, 0.2)};
  background-color: ${theme.colors.white};
`;

export const Menu = styled.div`
  position: absolute;
  top: 80px;
  right: 110px;
  z-index: 1;
`;
