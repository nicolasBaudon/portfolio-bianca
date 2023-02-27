import { Stack } from "@mui/material";
import React from "react";
import { Head } from "../../components/Common/Head/Head";
import { HeaderSection } from "../../components/Common/HeaderSection/HeaderSection";

const HolaPage = () => (
  <>
    <Head title="HOLA | Bianca Ramonda" />
    <Stack>
      <HeaderSection
        title="HOLA"
        subtitle="Hola is a mobile application project that seeks to provide a space to sell tourist experiences by area: gastronomic, sports, cultural experiences in the area, extreme, adventure, among others."
        myRole={
          <>
            <span>Conduct target user research.</span>
            <span>
              Discover the pain points of the project and their possible
              solution.
            </span>
            <span>Design and present the prototypes.</span>
          </>
        }
        results={
          <>
            <span>
              The project was presented including high fidelity prototypes, UI
              Kit and documented research.
            </span>
            <span>
              We managed to finish the project with a solid prototype and user
              research, ready to be developed and carried out.
            </span>
          </>
        }
      />
    </Stack>
  </>
);

export default HolaPage;
