import React from "react";
import { Stack, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section2.1.styles";

export const Section2dot1 = () => (
  <Box sx={styles.rootContainer}>
    <Stack sx={styles.container}>
      <Box width={1} textAlign="center">
        <StaticImage src="../../../images/projects/tomamate/section2.png" />
      </Box>
    </Stack>
  </Box>
);
