import React, { forwardRef } from "react";
import { Button, Dialog, IconButton, Stack, Slide } from "@mui/material";
import closeIcon from "../../../../images/white-x.svg";
import { styles } from "./Menu.styles";
import { navigate } from "gatsby";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export const Menu = ({ open, handleOpen }) => {
  const handleOpenMail = () => {
    window.location.href = "mailto:biancaramonda@gmail.com";
    handleOpen()
  };

  const handleScrollProjects = () => {
    navigate("#projects");
    handleOpen();
  };

  return (
    <Dialog
      open={open}
      fullScreen
      TransitionComponent={Transition}
      sx={styles.modalContainer}
    >
      <Stack sx={styles.container}>
        <IconButton onClick={handleOpen} sx={styles.icon}>
          <img src={closeIcon} alt="close-btn" />
        </IconButton>
        <Button sx={styles.buttonItem} onClick={handleOpenMail}>
          <p>Contact</p>
        </Button>
        <Button sx={styles.buttonItem} onClick={handleScrollProjects}>
          <p>Projects</p>
        </Button>
        <Button sx={styles.buttonItem}>
          <p>Download resume</p>
        </Button>
      </Stack>
    </Dialog>
  );
};
