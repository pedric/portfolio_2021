import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Context";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Head>
        <link
          rel='preload'
          href='/fonts/silka-regular-webfont.ttf'
          as='font'
          crossOrigin=''
        />
      </Head>
      <Header />
      <StyledDiv
        background={theme.secondary}
        color={theme.primary}
        accent={theme.accent}
      >
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

  @media (max-width: 400px) {
    padding-top: 145px;
  }

  a {
    background: ${(props) => props.accent};
    padding: 0px 1px;
  }

  img {
    width: 100%;
  }

  blockquote {
    p {
      font-size: 34px;
      text-align: center;
      background: ${(props) => props.color};
      color: ${(props) => props.background};
    }
  }

  & main {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default Layout;
