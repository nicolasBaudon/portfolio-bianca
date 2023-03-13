import React from "react";
import { Stack, Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { styles } from "./Section4.styles";

export const Section4 = () => (
  <Box>
    <Stack sx={styles.container}>
      <h3>
        Based on the interviews with users, the feedback received through google
        forms and the analysis with the UX/UI designers team, we began to plan
        the next steps to prototype.
      </h3>
      <Stack sx={styles.row}>
        <StaticImage src="../../../images/projects/hola/section4.png" />
        <Stack sx={styles.row.listContainer}>
          <p className="text">USER: Tourists.</p>
          <p className="text">
            PROBLEM: Finding varied and complete tourist activities.
          </p>
          <p className="text">
            CURRENT SOLUTION: social networks / travel company.
          </p>
          <p className="text">
            THEY FACE THE PROBLEM: When you organize a trip and search online
            for different proposals for experiences.
          </p>
          <p className="text">WHY IS IT IMPORTANT TO SOLVE THE PROBLEM?: It would reactivate tourism in the area, provide varied options of tourist experiences, exponentially improve the economy of the user who sells the service, facilitate and expedite the travel plan adapted to any economy.</p>
        </Stack>
      </Stack>
    </Stack>
  </Box>
);
