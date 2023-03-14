import React from "react";
import { Stack, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section5.styles";

export const Section5 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>
        In search of the new identity of the product, we carried out a moodboard
        and benchmarking with the client, where we took different references.
      </h3>
      <Stack sx={styles.row} className="reverse">
        <p className="text">
          First of all, we decided to change the primary and neutral colors of
          the product: taking into account the history of the product for sale
          and its culture, the colors that most prevail in originality are terra
          colors: brown because the mates are made of wood or pumpkin, opaque
          green because of the grass, and black because of the leather that
          covers it.
        </p>
        <StaticImage src="../../../images/projects/tomamate/section5.1.png" />
      </Stack>
      <Stack sx={styles.row}>
        <p className="text">
          We carried out the benchmarking taking two examples from different
          e-commerce, we decided to use the minimalist aesthetic, black and
          white colors as neutral colors that will contrast with the main color,
          we will also take the way of displaying the products, the order and
          space of the information, and the component style.
        </p>
        <StaticImage src="../../../images/projects/tomamate/section5.2.png" />
      </Stack>
      <Stack sx={styles.row} className="reverse">
        <p className="text">
          We selected images that refer to the culture of mate in Argentina:
          mate as an accompaniment, on trips, with friends and family. We create
          the images as banners including phrases to generate in the user a
          feeling of belonging or inspiration.
        </p>
        <StaticImage src="../../../images/projects/tomamate/section5.3.png" />
      </Stack>
      <Stack sx={styles.row}>
        <p className="text">
          Finally, we brainstormed to give this product a new name and logo: we
          made a presentation for the client where he chose the new logo and
          name of his brand "TOMAMATE" - A play on words that includes the verb
          "drink" and the word "mate" and the logo represents a set of mate.
        </p>
        <StaticImage src="../../../images/projects/tomamate/section5.4.png" />
      </Stack>
    </Stack>
  </Box>
);
