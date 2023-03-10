import React from "react";
import { Stack, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section4.styles";

export const Section4 = () => (
  <Box sx={styles.rootContainer}>
    <Stack sx={styles.container}>
        <p className='text'>
          We document the identity of the product: logo, primary colors,
          typography, components and general characteristics to begin to analyze
          the redesign from the bases.
        </p>
      <StaticImage src="../../../images/projects/tomamate/section4.png" />
    </Stack>
  </Box>
);
