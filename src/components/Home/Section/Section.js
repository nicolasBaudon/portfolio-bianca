import React from "react";
import { Button, Stack } from "@mui/material";
import { navigate } from "gatsby";
import { serializeString } from "../../../utils/strings";
import { getStyles } from "./Section.styles";

export const Section = ({
  title,
  subtitle,
  description,
  buttonLabel,
  dark,
}) => {
  const styles = getStyles(dark);

  const handleClick = () => {
    navigate(`/projects/${serializeString(title)}`);
  };

  return (
    <Stack sx={styles.container}>
      <Stack sx={styles.contentContainer}>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{description}</p>
        <Button onClick={handleClick} variant="contained">
          {buttonLabel}
        </Button>
      </Stack>
      <img
        src={require(`../../../images/home/${serializeString(title)}.png`).default}
        alt={title}
      />
    </Stack>
  );
};
