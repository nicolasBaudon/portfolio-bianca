import { Stack } from "@mui/material";
import React from "react";
import { Head } from "../../components/Common/Head/Head";
import { HeaderSection } from "../../components/Common/HeaderSection/HeaderSection";

const FlickPage = () => (
  <>
    <Head title="Flick | Bianca Ramonda" />
    <Stack>
      <HeaderSection
        title="Flick"
        subtitle="Flick offers the possibility of reselling and auctioning tickets for all types of events in a secure, transparent and decentralized way thanks to blockchain technology."
        myRole={
          <>
            <span>User research, prototyping and UI design. </span>
            <span>Built and maintained a design system. </span>
            <span>
              Perform high fidelity deliveries and communicate redesigns to
              frontend developer team.
            </span>
          </>
        }
        results={
          <>
            <span>
              The order and maintenance of the ui system helped the
              communication and fluidity of the work together with the
              developers.
            </span>
            <span>
              Favorable user experience results in product testing demos.
            </span>
            <span>
              Improved the identity and image of the product in relation to the
              team's objective
            </span>
          </>
        }
      />
    </Stack>
  </>
);

export default FlickPage;
