import React from "react";
import { Stack, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section2.styles";

export const Section2 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>
        The website tries to solve various problems that directly and indirectly
        affect the real estate agency and its users:
      </h3>
      <Stack sx={styles.row}>
        <p className="text">
          Through the investigation of the central problem, two causes that
          generate the same consequence were detected: difficulty in
          communication with the user.
          <br /> Both causes are: <br />
          The decentralization of information where the properties were
          published on various platforms.
          <br />
          The system of communication and coordination of visits that depended
          clearly on the user calling the real estate phone number to talk and
          organize.
        </p>
        <StaticImage src="../../../images/projects/ms-real-estate/section2.png" />
      </Stack>
    </Stack>
  </Box>
);
