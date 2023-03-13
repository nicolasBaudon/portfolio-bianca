import { Stack } from "@mui/material";
import React from "react";
import { Head } from "../../components/Common/Head/Head";
import { HeaderSection } from "../../components/Common/HeaderSection/HeaderSection";
import { Section2 } from "../../components/MsRealEstatePage/Section2/Section2";
import { Section3 } from "../../components/MsRealEstatePage/Section3/Section3";
import { Section4 } from "../../components/MsRealEstatePage/Section4/Section4";
import { Section5 } from "../../components/MsRealEstatePage/Section5/Section5";
import { DesignSystemSection } from "../../components/Common/DesignSystemSection/DesignSystemSection";
import { EndSection } from "../../components/Common/EndSection/EndSection";
import designSystemImg from "../../images/projects/ms-real-estate/design-system.png";

const MsRealEstatePage = () => (
  <>
    <Head title="MS Real Estate | Bianca Ramonda" />
    <Stack>
      <HeaderSection
        title="MS Real Estate"
        subtitle="The MS real estate agency published its properties through social networks and web pages where there was a lot of competition, its properties had little visibility and it was increasingly difficult to rent or sell through these media."
        myRole={
          <>
            <span>Start the problem research and look for solutions.</span>
            <span>Know the target user and build user personas.</span>
            <span>
              Build information architecture and low-fidelity wireframes to test
              the product and possible solutions.
            </span>
            <span>
              Build the design system and design high fidelity prototypes.
            </span>
          </>
        }
        results={
          <>
            <span>Increase in views, sales and purchases of properties.</span>
            <span>
              Better attention and coordination thanks to the centralized
              information and reservation system for online visits.
            </span>
          </>
        }
      />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <DesignSystemSection
        title="Design System"
        descriptionItems={[
          "The UI Kit was built around the needs of the web page, based on lo-fi architecture and wireframes. We seek that the components have a modern aesthetic and adapt to the identity of the real estate brand, and that each component can activate the intuitive sense of the users.",
          "Each component of the UI Kit was designed to be used and reused in the construction of high-fidelity screens and before delivery they were perfectly defined since it is a product that will not have any further follow-up after delivery to the client, only maintenance of development.",
        ]}
        images={[designSystemImg]}
      />
      <EndSection />
    </Stack>
  </>
);

export default MsRealEstatePage;
