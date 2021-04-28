import React, { useState, useContext } from "react";
import ThemeContext from "../../Context";
import styled from "styled-components";

const Layout = ({ children }) => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <StyledDiv
      style={{
        "--background": `${theme.secondary}`,
        "--color": `${theme.primary}`,
      }}
    >
      {children}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background: var(--background);
  color: var(--color);
`;

export default Layout;
