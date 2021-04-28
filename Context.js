import React, { createContext } from "react";
import themes from "./themes";

const ThemeContext = createContext(themes.light);

export default ThemeContext;
