import React from "react";
import { Stack, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section2.styles";

export const Section2 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>
        This project manages to define and cover one of the needs that
        technology owes to mountaineering and mountaineers.
      </h3>
      <p>
        Every year all kinds of accidents occur in the mountains and attention
        and immediate action to carry out the rescues are of vital importance,
        but this process is affected by many factors, one of them being the
        ignorance of the exact location of the accident and the lack of
        communication.
      </p>
      <Box width={1} textAlign="center">
        <StaticImage src="../../../images/projects/safe/section2.png" />
      </Box>
    </Stack>
  </Box>
);
