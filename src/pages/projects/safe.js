import { Stack } from "@mui/material";
import React from "react";
import { Head } from "../../components/Common/Head/Head";
import { HeaderSection } from "../../components/Common/HeaderSection/HeaderSection";
import { EndSection } from "../../components/Common/EndSection/EndSection";

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
      <EndSection />
    </Stack>
  </>
);

export default SafePage;
