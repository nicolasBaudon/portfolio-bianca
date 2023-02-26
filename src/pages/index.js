import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../utils/theme";
import { Head } from "../components/Common/Head/Head";
import { Header } from "../components/Common/Header/Header";
import { Hero } from "../components/Home/Hero/Hero";
import "../styles/app.css";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head />
      <Header />
      <Hero />
    </ThemeProvider>
  );
};

export default Home;
