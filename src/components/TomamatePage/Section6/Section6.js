import React from "react";
import { Stack, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section6.styles";

export const Section6 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>The UX team gave us the wireframes:</h3>
      <h4>
        We carry out the analysis and survey to then begin to prototype three
        different design options taking into account the process of searching
        for the identity of the product.
      </h4>
      <p>
        The scans performed were formally presented to the client and the team
        to receive feedback. We selected the features that were highlighted to
        build the final prototype.
      </p>
      <Box width={1} textAlign="center">
        <StaticImage src="../../../images/projects/tomamate/section6.png" />
      </Box>
    </Stack>
  </Box>
);
