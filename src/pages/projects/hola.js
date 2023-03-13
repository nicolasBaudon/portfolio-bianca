import { Stack } from "@mui/material";
import React from "react";
import { Head } from "../../components/Common/Head/Head";
import { HeaderSection } from "../../components/Common/HeaderSection/HeaderSection";
import { EndSection } from "../../components/Common/EndSection/EndSection";
import { Section2 } from "../../components/HolaPage/Section2/Section2";
import { Section3 } from "../../components/HolaPage/Section3/Section3";
import { Section4 } from "../../components/HolaPage/Section4/Section4";
import { DesignSystemSection } from "../../components/Common/DesignSystemSection/DesignSystemSection";
import designSystemImg from '../../images/projects/hola/design-system.png';

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
      <Section2 />
      <Section3 />
      <Section4 />
      <DesignSystemSection
        title="Design System"
        descriptionItems={[
          "The initial screens were composed of different components of all kinds since we had: login, registration, home screen, profile, various functions such as: favorites, my experiences, map, recommendations, search, purchase process with reservation and process of sale.",
          "Each component was designed to facilitate various prototyping processes, maintaining the design system, forming the UI Kit, with possibilities of modification or addition.",
        ]}
        images={[designSystemImg]}
      />
      <EndSection />
    </Stack>
  </>
);

export default HolaPage;
