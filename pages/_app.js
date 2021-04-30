import React, { useState, useContext, useMemo } from "react";
import "../styles/globals.css";
import { ThemeContext, ThemeChanger } from "../Context";
import themes from "../themes";
import styled from "styled-components";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const ThemeChangerValue = useMemo(() => {
    // return { theme, setTheme };
    return setTheme;
  }, [theme, setTheme]);
  return (
    <ThemeContext.Provider value={themes[theme]}>
      <ThemeChanger.Provider value={ThemeChangerValue}>
        <StyledPageWrapper color={themes[theme]}>
          <Component {...pageProps} />
        </StyledPageWrapper>
      </ThemeChanger.Provider>
    </ThemeContext.Provider>
  );
}

const StyledPageWrapper = styled.div`
  a:not(.no-effect) {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      height: 1px;
      background: ${(props) => props.color.primary};
      width: 0%;
      transition: width 100ms ease-in-out;
    }

    &:hover:after {
      width: 100%;
    }
  }
`;

export default MyApp;
