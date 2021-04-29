import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Context";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Header />
      <StyledDiv background={theme.secondary} color={theme.primary}>
        <main>{children}</main>
      </StyledDiv>
      <Footer />
    </>
  );
};

const StyledDiv = styled.div`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  min-height: 100vh;
  padding-top: 84px;

  & main {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default Layout;
