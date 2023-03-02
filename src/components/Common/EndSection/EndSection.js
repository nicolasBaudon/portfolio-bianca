import React from "react";
import { Button, Stack } from "@mui/material";
import { styles } from "./EndSection.styles";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";

export const EndSection = () => {
  const handleNavigateHome = () => navigate("/");
  const handleScrollTop = () => window.scrollTo(0, 0);

  return (
    <Stack sx={styles.container}>
      <StaticImage src="../../../images/projects/end-section.png" />
      <Stack sx={styles.buttonsContainer}>
        <Button variant="contained" onClick={handleNavigateHome}>
          Home
        </Button>
        <Button variant="outlined" onClick={handleScrollTop}>
          Up
        </Button>
      </Stack>
    </Stack>
  );
};
