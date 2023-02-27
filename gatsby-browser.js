import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./src/utils/theme";
import { Header } from "./src/components/Common/Header/Header";
import { Footer } from "./src/components/Common/Footer/Footer";

const defaultTheme = "light";
export const ThemeContext = React.createContext(defaultTheme);

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {element}
      <Footer />
    </ThemeProvider>
  );
};
