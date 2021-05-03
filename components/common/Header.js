import React, { useContext, useState, useEffect } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import styled from "styled-components";
import { ThemeContext } from "../../Context";

const Header = () => {
  const theme = useContext(ThemeContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    isLoading != true && (
      <StyledHeader background={theme.secondary} color={theme.primary}>
        <Logo fill={theme.primary} />
        <Nav />
      </StyledHeader>
    )
  );
};

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 84px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export default Header;
