import React, { useState, useContext, useMemo } from "react";
import "../styles/globals.css";
import { ThemeContext, ThemeChanger } from "../Context";
import themes from "../themes";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const ThemeChangerValue = useMemo(() => {
    // return { theme, setTheme };
    return setTheme;
  }, [theme, setTheme]);
  return (
    <ThemeContext.Provider value={themes[theme]}>
      <ThemeChanger.Provider value={ThemeChangerValue}>
        <Component {...pageProps} />
      </ThemeChanger.Provider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
