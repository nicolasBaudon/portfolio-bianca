import React from "react";
import { Box, Stack } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section8.styles";

export const Section8 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>
        By analyzing the iterated prototype, we were able to identify its
        biggest pain points and streamline the flow for the fewest steps and
        highest completion rate.
      </h3>
      <p>
        Flows such as: purchase process, funding process with tutorials and sale
        including the publication of the ticket by uploading the corresponding
        pdf for verification, validation and creation of NFT.
      </p>
      <Box width={1} textAlign="center">
        <StaticImage src="../../../images/projects/flick/section-8.png" />
      </Box>
    </Stack>
  </Box>
);
