import React from "react";
import { Stack, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section7.styles";

export const Section7 = () => (
  <Box>
    <Stack sx={styles.container}>
      <Stack sx={styles.contentContainer}>
        <p>
          On the navigation bar, we added the option of notifications where the
          user will be able to know if his ticket was purchased and have news
          about benefits or tickets for sale of interest to the user.
        </p>
        <p>
          We created a notification system knowing that it is a web app, where
          we include the emails as a notice and we use this method as a
          marketing strategy where the transactions carried out will be
          notified, but published content will also be recommended depending on
          the user's searches.
        </p>
      </Stack>
      <StaticImage src="../../../images/projects/flick/section-7.png" />
    </Stack>
  </Box>
);
