import React, { createContext } from "react";
import themes from "./themes";

export const ThemeContext = createContext(themes.light);
