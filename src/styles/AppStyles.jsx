// AppStyles.js
import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  font-family: "Pretendard";
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 320px 18px 320px;
`;

export const LogoWrap = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-right: 8px;
`;

export const LogoText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #0088ff;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

export const NavItem = styled.a`
  text-decoration: none;
  color: black;
  transition: all 0.2s ease;

  &:hover {
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.19));
  }
`;

export const MainBg = styled.div`
  height: 500px;
  background-size: cover;
  background-position: center;
`;

export const MainWrapper = styled.main`
  max-width: 1100px;
  margin: 80px auto;
  padding: 0px 40px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ShoeMenuMain = styled.div`
  font-size: 30px;
  font-family: "Paperlogy";
  font-weight: 600;
`;

export const ShoeImageRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`;
