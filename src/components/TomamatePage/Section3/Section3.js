import React from "react";
import { Stack, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section3.styles";

export const Section3 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>
        Analyzing the product to define the redesign of the website and its
        identity.
      </h3>
      <h4>
        It was possible to observe in general features that the web page had
        simple design characteristics:
      </h4>
      <ul>
        <li>It uses pink as the main color and only 2 green buttons.</li>
        <li>The components held a square design with zero corner radius.</li>
        <li>
          The information was distributed in a large banner format, preventing
          easy navigation and viewing of the products for sale.
        </li>
        <li>Long carousels, long product descriptions.</li>
        <li>Hardly accessible contrasts between the pink and white variants.</li>
      </ul>
      <Box width={1} textAlign="center">
        <StaticImage src="../../../images/projects/tomamate/section3.png" />
      </Box>
    </Stack>
  </Box>
);
