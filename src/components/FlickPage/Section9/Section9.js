import React from "react";
import { Box, Stack } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section9.styles";

export const Section9 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>The product redesign</h3>
      <Stack sx={styles.contentContainer}>
        <p>
          The redesign of the web app focused on the search for the identity of
          the product, this research was carried out through interviews and
          demos with the team. First we make clear the objectives of the
          product, what sensation and impression do we want to generate in the
          user? The answer was: security, seriousness and a touch of young and
          innovative style, like something semi-formal.
        </p>
        <p>
          Taking into account the responses after the interview process with the
          team and analysis of the product: We create the moodboard.We do
          explorations where we test different colors, typography and
          prototyping formats. We define the identity of the product from a
          demonstration of three different prototypes, the following was
          selected: logo, typography, colors and component formats, conforming
          with this information: the foundations - UI Kit.
        </p>
      </Stack>
      <Stack sx={styles.imagesContainer}>
        <StaticImage src="../../../images/projects/flick/section-9-1.png" />
        <StaticImage src="../../../images/projects/flick/section-9-2.png" />
      </Stack>
    </Stack>
  </Box>
);
