import React from "react";
import { Stack, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section2.styles";

export const Section2 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>
        This project tries to present a solution to the problems of the
        traveler, people who plan trips to see new places and live new
        experiences.
      </h3>
      <Stack sx={styles.row}>
        <p className="text">
          The problem arises when looking for different experiences in each
          area, where monopolies and oligopolies have greater visibility, with
          expensive and inaccessible prices.<br />
          <strong>
            The solution presented by this project is to provide a safe and free
            space where each user can sell and buy tourist experiences, making
            enterprises visible over large tourist centers.
          </strong>
        </p>
        <StaticImage src="../../../images/projects/hola/section2.png" />
      </Stack>
    </Stack>
  </Box>
);
