import React, { useState } from "react";
import { Stack, IconButton } from "@mui/material";
import hamburgerIcon from "../../../images/hamburger.svg";
import { Menu } from "./Menu/Menu";
import { styles } from "./Header.styles";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleOpenMenu = () => setMenu((prevState) => !prevState);

  return (
    <Stack sx={styles.container}>
      <IconButton sx={styles.button} onClick={handleOpenMenu}>
        <img src={hamburgerIcon} alt="" />
      </IconButton>
      <Menu open={menu} handleOpen={handleOpenMenu}/>
    </Stack>
  );
};
