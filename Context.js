import React, { createContext } from "react";
import themes from "./themes";

const ThemeContext = createContext(themes.light);
const ThemeChanger = createContext();

export { ThemeChanger, ThemeContext };

export default ThemeContext;
