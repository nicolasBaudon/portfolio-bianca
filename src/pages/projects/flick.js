import { Stack } from "@mui/material";
import React from "react";
import { Head } from "../../components/Common/Head/Head";
import { HeaderSection } from "../../components/Common/HeaderSection/HeaderSection";
import { Section2 } from "../../components/FlickPage/Section2/Section2";
import { Section3 } from "../../components/FlickPage/Section3/Section3";
import { Section4 } from "../../components/FlickPage/Section4/Section4";
import { Section5 } from "../../components/FlickPage/Section5/Section5";
import { Section6 } from "../../components/FlickPage/Section6/Section6";
import { Section7 } from "../../components/FlickPage/Section7/Section7";
import { Section8 } from "../../components/FlickPage/Section8/Section8";

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
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </Stack>
  </>
);

export default FlickPage;
