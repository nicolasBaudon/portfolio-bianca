import React from "react";
import { Stack, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section3.styles";

export const Section3 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>
        Once the central problem and its effects on the product have been
        detected, we begin to devise various POSSIBLE solutions.
      </h3>
      <h4>
        This process led us to carry out tests to even better know the target
        user and understand their needs when looking for a property to buy or
        rent.
      </h4>
      <p>
        From research and testing, we began to build user personas and user
        flows - Detecting and knowing the various behaviors, patterns and needs
        of the user.
      </p>
      <Stack sx={styles.imagesContainer}>
        <StaticImage src="../../../images/projects/ms-real-estate/section3.1.png" />
        <StaticImage src="../../../images/projects/ms-real-estate/section3.2.png" />
      </Stack>
    </Stack>
  </Box>
);
