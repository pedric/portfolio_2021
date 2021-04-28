import React, { useState, useContext } from "react";
import ThemeContext from "../../pages/context";
import styled from "styled-components";
// import { Children } from 'react';

const Layout = ({ children }) => {
  const theme = useContext(ThemeContext);
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
