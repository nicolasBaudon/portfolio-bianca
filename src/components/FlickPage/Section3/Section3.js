import React from "react";
import { Box, Stack } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section3.styles";

export const Section3 = () => (
  <Stack sx={styles.container}>
    <h3>
      Flick is a web application that provides a secure space for the ticket
      resale market for all types of events, using blockchain technology,
      transforming each ticket published into NFT.
    </h3>
    <h4>
      The app focuses on two key use cases: posting tickets for sale and
      purchasing the NFT valued by the ticket.
    </h4>
    <Stack>
      <p>To define the architecture of the application, we ask our users:</p>
      <p>1. What were your concerns when reselling tickets?</p>
      <p>2. What method or applications did you use to resell?</p>
      <p>3. What virtual wallets do you know or use with crypto?</p>
      <p>We preselected the most repeated answers.</p>
    </Stack>
    <Box width={1} textAlign="center">
      <StaticImage src="../../../images/projects/flick/section-3.png" />
    </Box>
  </Stack>
);
