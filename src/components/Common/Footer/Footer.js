import React from "react";
import { IconButton, Stack, Box } from "@mui/material";
import linkedin from "../../../images/linkedin.svg";
import mail from "../../../images/mail.svg";
import behance from "../../../images/behance.svg";
import { styles } from "./Footer.styles";

const socialMedias = [
  {
    id: 1,
    icon: linkedin,
    url: "https://www.linkedin.com/in/bianca-ramonda-lemos-bb483217b",
  },
  {
    id: 2,
    icon: mail,
    url: "mailto:biancaramonda@gmail.com",
  },
  {
    id: 3,
    icon: behance,
    url: "https://www.behance.net/f9ce885d",
  },
];

export const Footer = () => {
  const handleClick = (url) => window.open(url, "_blank", "noopener");

  return (
    <Box>
      <Stack sx={styles.container}>
        {socialMedias.map((media) => (
          <IconButton key={media.id} onClick={() => handleClick(media.url)}>
            <img src={media.icon} alt="" />
          </IconButton>
        ))}
      </Stack>
    </Box>
  );
};
