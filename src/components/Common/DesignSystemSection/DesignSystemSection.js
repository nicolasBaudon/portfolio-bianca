import React from "react";
import { Box, Stack } from "@mui/material";
import { styles } from "./DesignSystemSection.styles";

export const DesignSystemSection = ({ title, descriptionItems, images }) => (
  <Box>
    <Stack sx={styles.container}>
      <h3>{title}</h3>
      <Stack gap={2}>
        {descriptionItems.map((item, key) => (
          <p key={key}>{item}</p>
        ))}
      </Stack>
      <Stack sx={styles.imagesContainer}>
        {images.map((image, key) => (
          <img key={key} src={image} alt="" />
        ))}
      </Stack>
    </Stack>
  </Box>
);
