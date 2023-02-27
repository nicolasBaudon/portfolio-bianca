import { Stack } from "@mui/material";
import React from "react";
import { Head } from "../../components/Common/Head/Head";
import { HeaderSection } from "../../components/Common/HeaderSection/HeaderSection";

const TomamatePage = () => (
  <>
    <Head title="TOMAMATE | Bianca Ramonda" />
    <Stack>
      <HeaderSection
        title="TOMAMATE"
        subtitle="Matucha is a store dedicated to everything related to mates (Argentine product), it does not have a physical store, only online and from Buenos Aires they ship throughout the country."
        myRole={
          <>
            <span>
              Redesign taking into account customer requirements and analysis of
              existing web page.
            </span>
            <span>
              Survey of wireframes and search for solutions to the different
              pain points.
            </span>
            <span>
              Definition of guidelines, construction of UI Kit and high-fidelity
              screens, based on the structure of wireframes.
            </span>
            <span>
              Create documentation and present the project to the client in
              stages to receive feedback.
            </span>
          </>
        }
        results={
          <>
            <span>Visits and sales increased through the website.</span>
            <span>
              We achieved a more intuitive redesign where users did not abandon
              the purchase process.
            </span>
            <span>
              The redesign of the product identity allowed our client to capture
              the attention of the target users.
            </span>
          </>
        }
      />
    </Stack>
  </>
);

export default TomamatePage;
