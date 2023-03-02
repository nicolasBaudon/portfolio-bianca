import React from "react";
import { Box, Stack } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section5.styles";

export const Section5 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>
        The big challenge for Flick was to keep the process simple because by
        using crypto and blockchain, many potential users who were not related
        to these technologies or wallets were taking a step back.{" "}
      </h3>
      <p>
        <strong>
          We needed a section that provides more information about how the app
          works, how to fund your wallet with crypto and finally how to extract
          the money from the profits
        </strong>
      </p>
      <Box width={1} textAlign="center">
        <StaticImage src="../../../images/projects/flick/section-5.png" />
      </Box>
    </Stack>
  </Box>
);
