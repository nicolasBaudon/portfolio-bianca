import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Stack, Box } from "@mui/material";
import icon from "../../../images/projects/safe/section4-icon.svg";
import { styles } from "./Section4.styles";

export const Section4 = () => (
  <Box>
    <Stack sx={styles.container}>
      <Stack sx={styles.row}>
        <h3>
          To design the prototype, I based myself mainly on the need that the
          product tries to cover: safety in the mountains for beginners and
          experienced users in the field.
        </h3>
        <StaticImage src="../../../images/projects/safe/section4.png" />
      </Stack>
      <ul>
        <li>
          <img src={icon} alt="" />
          We investigated potential users by conducting google forms with
          specific questions, interviews where users commented on their
          experiences and needs in the mountains.
        </li>
        <li>
          <img src={icon} alt="" />
          We created User Personas with the information acquired and User flows
          that allowed us to have an approach to the objective of the product.
        </li>
        <li>
          <img src={icon} alt="" />
          We created a moodboard with the team looking for the identity of the
          product.
        </li>
        <li>
          <img src={icon} alt="" />
          We carry out a kind of benchmarking of similar applications to take
          into account the pros and pain points in the design and user
          experience.
        </li>
      </ul>
    </Stack>
  </Box>
);
