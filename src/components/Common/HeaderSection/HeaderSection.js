import React from "react";
import { Stack } from "@mui/material";
import { styles } from "./HeaderSection.styles";
import { serializeString } from "../../../utils/strings";

export const HeaderSection = ({ title, subtitle, myRole, results }) => (
  <Stack sx={styles.container}>
    <Stack sx={styles.contentContainer}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <Stack sx={styles.row}>
        <Stack>
          <h3>My role</h3>
          <p>{myRole}</p>
        </Stack>
        <Stack>
          <h3>Results</h3>
          <p>{results}</p>
        </Stack>
      </Stack>
    </Stack>
    <img
      src={
        require(`../../../images/projects/${serializeString(title)}/banner.png`)
          .default
      }
      alt=""
    />
  </Stack>
);
