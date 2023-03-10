import React from "react";
import { Stack, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section2.styles";

export const Section2 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>Client requirements for web app mobile first.</h3>
      <h4>
        In the first meeting with the client, we inquire about the objectives of
        the project, the types of users to whom they are addressed and their
        needs in terms of redesign.
      </h4>
      <p>
        <strong>Customer need:</strong> Increase sales through the design of a web app that
        allows them to sell their products online 100% of Argentine origin.
      </p>
      <p>
        <strong>Users:</strong> B2C public, intended for final consumers, young people between
        25/35 years old, medium socioeconomic level.
      </p>
      <p>
        <strong>Requirements:</strong> Must be a web app mobile first redesign. It is expected to
        improve the design by referring to the culture of our country, the art
        of sharing among friends, our products are 100% handmade and of national
        origin.
      </p>
    </Stack>
  </Box>
);
