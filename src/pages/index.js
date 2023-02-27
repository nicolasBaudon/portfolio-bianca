import * as React from "react";
import { ThemeProvider, CssBaseline, Typography } from "@mui/material";
import { theme } from "../utils/theme";
import { Head } from "../components/Common/Head/Head";
import { Header } from "../components/Common/Header/Header";
import { Hero } from "../components/Home/Hero/Hero";
import "../styles/app.css";
import { Section } from "../components/Home/Section/Section";
import { homeSections } from "../utils/constants/homeSections";
import { Footer } from "../components/Common/Footer/Footer";

const titleStyles = {
  padding: 2,
  textAlign: "center",
  fontSize: { xs: "26px", sm: "32px" },
  fontWeight: 300,
  backgroundColor: "#000",
  color: "#fff",
};

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head />
      <Header />
      <Hero />
      <Typography sx={titleStyles} component="h3" id="projects">
        Projects
      </Typography>
      {homeSections.map((section) => (
        <React.Fragment key={section.id}>
          <Section {...section} />
        </React.Fragment>
      ))}
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
