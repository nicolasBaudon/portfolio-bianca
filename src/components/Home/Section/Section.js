import React from "react";
import { Button, Stack } from "@mui/material";
import { getStyles } from "./Section.styles";
import { navigate } from "gatsby";

const serializeTitle = (title) => title.toLowerCase().replaceAll(" ", "-");

export const Section = ({
  title,
  subtitle,
  description,
  buttonLabel,
  dark,
}) => {
  const styles = getStyles(dark);

  const handleClick = () => {
    navigate(`/projects/${serializeTitle(title)}`);
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
        src={require(`../../../images/home/${serializeTitle(title)}.png`).default}
        alt={title}
      />
    </Stack>
  );
};
