import { Stack } from "@mui/material";
import React from "react";
import { Head } from "../../components/Common/Head/Head";
import { HeaderSection } from "../../components/Common/HeaderSection/HeaderSection";

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
    </Stack>
  </>
);

export default MsRealEstatePage;
