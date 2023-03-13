import React from "react";
import { Stack, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section5.styles";

export const Section5 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>How did we solve the main problems?</h3>
      <p>
        We centralize the information on a web page that not only includes all
        the properties offered by the real estate company, but also information
        about it from the section called "Who are we?", even contacts, social
        networks and location: this provided greater truthfulness to the website
        and trust in users. <br />
        We created a reservation system for visits that allows the user to book
        directly through the website by selecting a day and time, finalizing the
        confirmation including name and some means of contact. The system
        automatically, once the reservation is confirmed, sends an email to the
        user with all the information of the visit: location and indications of
        the location, images of the house, date and time, and a WhatsApp number
        of the real estate agency in case of need to contact when arriving at
        the place.
      </p>
      <Box width={1} textAlign="center">
        <StaticImage src="../../../images/projects/ms-real-estate/section5.png" />
      </Box>
    </Stack>
  </Box>
);
