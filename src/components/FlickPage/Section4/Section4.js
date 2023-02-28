import React from "react";
import { Stack } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section4.styles";

export const Section4 = () => (
  <Stack sx={styles.container}>
    <Stack sx={styles.contentContainer}>
      <p>
        From a series of prototypes, we arrived at an architecture based on
        tabs, each one dedicated to a specific aspect: home with search bar and
        recommendations, profile that includes the user's wallet and tickets,
        with an e-commerce format.
      </p>
      <p>
        This architecture presents various logics related to the options offered
        by the web app.
      </p>
      <p>
        An intuitive user interface using safe and familiar visual stimuli that
        will provide confidence, and a card-based UI allowed to easily scale the
        dashboard as additional features were developed.
      </p>
    </Stack>
    <StaticImage src="../../../images/projects/flick/section-4.png" />
  </Stack>
);
