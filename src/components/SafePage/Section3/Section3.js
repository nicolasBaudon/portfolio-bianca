import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Stack, Box } from "@mui/material";
import { styles } from "./Section3.styles";

export const Section3 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>
        SAFE provides various functions to increase security, mountain knowledge
        and fun for the user: tourist, athlete, mountaineer and facilitate the
        work of workers in the sector, such as instructors, rescuers, mountain
        guides, etc.
      </h3>
      <h4>The application focuses on three key use cases:</h4>
      <p>
        1. Activate alert by accident, the alert will be activated in the rescue
        posts who will be able to view on the map the exact place where it was
        activated, which user activated it and information on the type of
        activity that was being carried out.
      </p>
      <p>
        2. Connect with the team/friends with whom you carry out the mountain
        activity. This function facilitates the organization and security of the
        connected group, they can even open chats through the app to talk
        individually or in groups, view the location of each member on the map
        and receive alerts in case any member activates the alert button.
      </p>
      <p>
        3. Information on the area visited including recommendations for the
        activity carried out, from equipment, recommended clothing, routes or
        trails, etc.
      </p>
      <Box width={1} textAlign="center">
        <StaticImage src="../../../images/projects/safe/section3.png" />
      </Box>
    </Stack>
  </Box>
);
