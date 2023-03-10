import { Stack } from "@mui/material";
import React from "react";
import { Head } from "../../components/Common/Head/Head";
import { HeaderSection } from "../../components/Common/HeaderSection/HeaderSection";
import { EndSection } from "../../components/Common/EndSection/EndSection";
import { Section2 } from "../../components/SafePage/Section2/Section2";
import { Section3 } from "../../components/SafePage/Section3/Section3";
import { Section4 } from "../../components/SafePage/Section4/Section4";
import { Section5 } from "../../components/SafePage/Section5/Section5";
import { DesignSystemSection } from "../../components/Common/DesignSystemSection/DesignSystemSection";
import designSystemImg1 from "../../images/projects/safe/design-system1.png";
import designSystemImg2 from "../../images/projects/safe/design-system2.png";

const SafePage = () => (
  <>
    <Head title="SAFE | Bianca Ramonda" />
    <Stack>
      <HeaderSection
        title="SAFE"
        subtitle="SAFE is a mobile application that provides various functions for mountain tourism and mountaineers."
        myRole={
          <>
            <span>Sketch the user flow mapping and navigation scheme.</span>
            <span>Build and prototype wireframes.</span>
            <span>
              UI design: prototype each screen and flow taking into account the
              user and product information collected.
            </span>
          </>
        }
        results={
          <>
            <span>
              A complete, scalable, responsive and intuitive app design.
            </span>
            <span>Important insights about the particular type of user.</span>
            <span>
              A design that represents the identity of the product through its
              responsibility with the user and its visuals.
            </span>
          </>
        }
      />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <DesignSystemSection
        title="Design system"
        descriptionItems={[
          "The complexity of the application required several screens that included all kinds of components and covered all the corresponding functions: Login, registration, profile, fundamental options: alert button, connection with friends, map, search and its different casuistics.",
          "We create a UI Kit based on components designed from atoms to molecules, from simple components to complex components. The UI Kit was ordered and designed with the aim of facilitating the prototyping work and to maintain the team's design system.",
        ]}
        images={[designSystemImg1, designSystemImg2]}
      />
      <EndSection />
    </Stack>
  </>
);

export default SafePage;
