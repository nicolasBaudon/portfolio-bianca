import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Stack, Box } from "@mui/material";
import { styles } from "./Section5.styles";

export const Section5 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>Product features that emerged from user feedback.</h3>
      <ul>
        <li>Your group: to connect with friends and chat.</li>
        <li>Map: information of the mapped area.</li>
        <li>Report: provides weather data.</li>
        <li>
          Emergency: Accident alert button. Ski resorts mapped with tourist
          information.
        </li>
        <li>
          Profile with personal information: hills or trails traveled, height of
          hills, time taken to go up and down.
        </li>
        <li>Search bar: to search for destinations, functions or contacts.</li>
      </ul>
      <Box width={1} textAlign="center">
        <StaticImage src="../../../images/projects/safe/section5.png" />
      </Box>
    </Stack>
  </Box>
);
