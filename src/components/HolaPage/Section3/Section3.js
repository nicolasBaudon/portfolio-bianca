import React from "react";
import { Stack, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section3.styles";

export const Section3 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>
        We did a benchmarking to detect and define the pain points of the market
        for the sale of experiences or the tourism market.
      </h3>
      <h4>
        We mainly look at local government pages, sites that offer similar
        sales, and we also look at social networks that use experience sellers
        to get their market seen.
      </h4>
      <Stack sx={styles.row}>
        <Stack sx={styles.row.listContainer}>
          <p className="text">We detected that:</p>
          <ul>
            <li className="text">
              1. Government tourism pages are outdated, unintuitive, and only
              include large companies in the experiences they report.
            </li>
            <li className="text">
              2.Entrepreneurs selling experiences use: Facebook and Instagram to
              sell to the public.
            </li>
            <li className="text">3. Very few options were found on google.</li>
            <li className="text">
              4. Airbnb included a section for selling experiences but it
              charges fees to list and it is not as well known or used: there
              are very few selling experiences charged.
            </li>
          </ul>
        </Stack>
        <StaticImage src="../../../images/projects/hola/section3.png" />
      </Stack>
    </Stack>
  </Box>
);
