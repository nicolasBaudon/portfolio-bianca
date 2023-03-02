import React from "react";
import { Box, Stack } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import tick from "../../../images/list-tick.svg";
import { styles } from "./Section6.styles";

const items = [
  "No one should interact with buyers and sellers.",
  "Each ticket will be verified before being published to guarantee its veracity.",
  "Each purchase and sale transaction will be carried out automatically and transparently.",
];

export const Section6 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>
        Flick seeks to protect the user from scams and other insecurities in the
        ticket resale market by providing a safe space where:.
      </h3>
      <ul>
        {items.map((item, key) => (
          <li key={key}>
            <img src={tick} alt="" />
            {item}
          </li>
        ))}
      </ul>
      <Stack gap={2}>
        <p>
          Based on the feedback from the users received in interviews, Google
          forms and two demos, we organize with the team the priorities of the
          points to be iterated on.We detect pain points in terms of user
          experience and development.
        </p>
        <p>
          The web app is divided into different sections, one of which is the
          profile that includes the functions most requested by users:
          transactions with buying and selling history, my flick tickets and my
          flick tickets for sale, the wallet with the option of fast funding and
          withdrawal.
        </p>
      </Stack>
      <Stack sx={styles.imagesContainer}>
        <StaticImage src="../../../images/projects/flick/section-6-1.png" />
        <StaticImage src="../../../images/projects/flick/section-6-2.png" />
      </Stack>
    </Stack>
  </Box>
);
