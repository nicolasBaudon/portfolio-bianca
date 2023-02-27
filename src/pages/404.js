import React from "react";
import { Stack } from "@mui/material";

const containerStyles = {
  mt: 16,
  alignItems: "center",
  h1: {
    fontSize: { xs: 60, md: 100 },
    my: 4,
  },
  p: {
    fontSize: 16,
    fontWeight: 300,
  },
};

const page404 = () => (
  <Stack sx={containerStyles}>
    <h1>404</h1>
    <p>No encontramos la página que estas buscando.</p>
  </Stack>
);

export default page404;
