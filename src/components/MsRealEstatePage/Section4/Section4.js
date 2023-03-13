import React from "react";
import { Stack, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section4.styles";

export const Section4 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>
        We make an approximation of what the information architecture would be
        to then begin to design the low-fidelity wireframes.
      </h3>
      <p>
        Once this stage of research and design is finished, we start testing
        again through interviews, calls, google forms and demos. The feedback
        gained provided us with enough information to start designing the
        high-fidelity prototypes and the design system.
      </p>
      <Box width={1} textAlign="center">
        <StaticImage src="../../../images/projects/ms-real-estate/section4.png" />
      </Box>
    </Stack>
  </Box>
);
