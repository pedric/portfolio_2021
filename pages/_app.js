import React, { useState, useContext } from "react";
import "../styles/globals.css";
import { ThemeContext } from "./context";
import themes from "./themes";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={themes[theme]}>
      <button onClick={() => setTheme("expressive")}>expressive</button>
      <button onClick={() => setTheme("dark")}>dark</button>
      <button onClick={() => setTheme("light")}>light</button>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
