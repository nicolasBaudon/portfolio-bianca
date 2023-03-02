import React from "react";
import { Box, Stack } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section2.styles";

export const Section2 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>
        For the common denominator of people, everything related to cyber
        security, blockchain and NFT's sounds abstract or difficult to
        understand.
      </h3>
      <p>
        The truth is that today, in the ticket resale market, people do not care
        enough about their security when carrying out this type of transaction,
        to perform them through a web application that uses new technologies,
        guarantees the user security and modernizes the ticket resale market by
        digitizing it. Unless it is a web application that is easy to use and
        intuitive, and provides benefits to the user such as the possibility of
        making a profit buying and reselling through the platform.{" "}
      </p>
      <Stack sx={styles.imagesContainer}>
        <StaticImage src="../../../images/projects/flick/transparent-card.png" />
        <StaticImage src="../../../images/projects/flick/secure-card.png" />
        <StaticImage src="../../../images/projects/flick/decentralized-card.png" />
      </Stack>
    </Stack>
  </Box>
);
