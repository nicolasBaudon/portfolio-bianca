import React, { forwardRef, useState } from "react";
import {
  Button,
  Dialog,
  IconButton,
  Stack,
  Slide,
  Collapse,
} from "@mui/material";
import { navigate } from "gatsby";
import closeIcon from "../../../../images/white-x.svg";
import chevronIcon from "../../../../images/white-chevron.svg";
import { serializeString } from "../../../../utils/strings";
import { styles } from "./Menu.styles";

const projectMenuItems = [
  "Flick",
  "MS real estate",
  "TOMAMATE",
  "HOLA",
  "SAFE",
];

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export const Menu = ({ open, handleOpen }) => {
  const [projectsMenu, setProjectsMenu] = useState(false);

  const handleOpenProjectsMenu = () =>
    setProjectsMenu((prevState) => !prevState);

  const handleOpenMail = () => {
    window.location.href = "mailto:biancaramonda@gmail.com";
    handleOpen();
  };

  const handleRedirectHome = () => {
    navigate("/");
    handleOpen();
  };

  const handleRedirectProject = (project) => {
    navigate(`/projects/${project}`);
    handleOpenProjectsMenu();
    handleOpen();
  };

  const handleDownloadResume = () => {
    window.open("/files/ResumeBiancaRamonda.pdf", "_blank", "noopener noreferrer");
  }

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
        <Button sx={styles.buttonItem} onClick={handleRedirectHome}>
          <p>Home</p>
        </Button>
        <Button sx={styles.buttonItem} onClick={handleOpenMail}>
          <p>Contact</p>
        </Button>
        <Button sx={styles.buttonItem} onClick={handleDownloadResume}>
          <p>Download resume</p>
        </Button>
        <Button sx={styles.buttonItem} onClick={handleOpenProjectsMenu}>
          <p>Projects</p>
          <img
            src={chevronIcon}
            alt=""
            className={projectsMenu ? "open" : ""}
          />
        </Button>
        <Collapse in={projectsMenu}>
          <Stack>
            {projectMenuItems.map((project) => (
              <Button
                sx={styles.innerButtonItem}
                key={project}
                onClick={() => handleRedirectProject(serializeString(project))}
              >
                <p>{project}</p>
              </Button>
            ))}
          </Stack>
        </Collapse>
      </Stack>
    </Dialog>
  );
};
