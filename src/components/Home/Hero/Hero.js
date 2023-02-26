import React from "react";
import { Stack } from "@mui/material";
import heroGif from "../../../images/home/hero.gif";
import { styles } from "./Hero.styles";

export const Hero = () => (
  <Stack sx={styles.container}>
    <Stack sx={styles.textContainer}>
      <h1>Bianca Ramonda</h1>
      <h2>UX/UI Designer</h2>
    </Stack>
    <img src={heroGif} alt="hero" />
  </Stack>
);
