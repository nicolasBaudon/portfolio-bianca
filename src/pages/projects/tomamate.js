import { Stack } from "@mui/material";
import React from "react";
import { Head } from "../../components/Common/Head/Head";
import { HeaderSection } from "../../components/Common/HeaderSection/HeaderSection";
import { EndSection } from "../../components/Common/EndSection/EndSection";
import { DesignSystemSection } from "../../components/Common/DesignSystemSection/DesignSystemSection";
import designSystemImg1 from "../../images/projects/tomamate/design-system1.png";
import designSystemImg2 from "../../images/projects/tomamate/design-system2.png";
import { Section2 } from "../../components/TomamatePage/Section2/Section2";
import { Section2dot1 } from "../../components/TomamatePage/Section2.1/Section2.1";
import { Section3 } from "../../components/TomamatePage/Section3/Section3";
import { Section4 } from "../../components/TomamatePage/Section4/Section4";
import { Section5 } from "../../components/TomamatePage/Section5/Section5";
import { Section6 } from "../../components/TomamatePage/Section6/Section6";

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
      <Section2 />
      <Section2dot1 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <DesignSystemSection
        title="Design system"
        descriptionItems={[
          "The design system was composed of components ordered and categorized in a hierarchical way. Each component was designed in such a way that they can be quickly reused and modified, which favored design work and communication and understanding with the development team. We carry out deliverables in stages where we iterate the design based on feedback from the client and the UX team, contributing research based on tests and demos.",
        ]}
        images={[designSystemImg1, designSystemImg2]}
      />
      <EndSection />
    </Stack>
  </>
);

export default TomamatePage;
