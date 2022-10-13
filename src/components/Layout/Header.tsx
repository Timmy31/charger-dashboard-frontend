import styled from "styled-components";
import logo from "../../img/go-e-logo.png";

export interface HeaderProps {}

/**
 * Header component on top of each page.
 */

export const Header = (_: HeaderProps) => {
  return (
    <StyledHeader>
      <LogoWrapper>
        <AppLogo src={logo} alt="logo"></AppLogo>
      </LogoWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: white;
  height: 80px;
  color: white;
  padding: 0.5rem 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
`;

const LogoWrapper = styled.div`
  justify-content: flex-start;
`;

const AppLogo = styled.img`
  height: 65px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: white;
`;
