import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import NameContainer from "../../components/name-container";
import HeadingSoluciones from "../../components/heading-soluciones";
import LatechFactoryIntro from "../../components/latech-factory-intro";
import SemilleroLatam from "../../components/semillero-latam";
import LatechFactoryIntro1 from "../../components/latech-factory-intro1";
import Footer from "../../components/footer";
import FrameComponent from "../../components/frame-component";
import UXUIDesignerTitle from "../../components/u-x-u-i-designer-title";
import GridPositioning from "../../components/grid-positioning";
import ProductGridNavigation from "../../components/product-grid-navigation";
import * as styles from "./index.module.css";

const Home = () => {
  return (
    <div className={styles.fondoConImagen}>
      <section className={styles.biancaRamonda}>
        <div className={styles.nameContainerParent}>
          {/* Header */}
          <NameContainer />
          {/* Hero */}
          <HeadingSoluciones />
        </div>
      </section>
      <div className={styles.experienceProjects}>
        <h1 className={styles.experienceProjects1}>Experience & Projects __</h1>
      </div>
      <LatechFactoryIntro
        latechFactory="Latech Factory"
        softwareFactorySpecializing="Software factory specializing in optimizing Shopify e-commerce platforms using advanced metrics to improve conversion rates."
        atLatechMyRoleFocusedOnCreat="At Latech, my role focused on creating A/B testing and multiple-testing proposals for a client on Shopify. My responsibilities extended beyond this, involving weekly meetings with the client, who was based in the United States. During these meetings, conducted in English, I presented designs and proposals and received feedback."
        inThisRoleILearnedToCreate="In this role, I learned to create SOPs (Standard Operating Procedures) since we utilized metaobjects in Shopify to facilitate the customization of the client's e-commerce platform. I was responsible for creating these documents, explaining the functionality of the metaobjects in an intuitive tutorial format."
      />
      <LatechFactoryIntro1 />
      <SemilleroLatam
        image4="../../images/image-3@2x.png"
        latechFactory="Semillero Latam"
        propMinWidth="108px"
        softwareFactorySpecializing="Semillero Latam is an MVP factory that provides work cells to clients or projects, building e-commerce sites and/or web apps from scratch."
        atLatechMyRoleFocusedOnCreat="My role as a UX/UI designer was to understand the client’s needs, identify the core objectives of the product in relation to the users, establish the user flow and information architecture based on prior research, and design low- and high-fidelity prototypes. "
        inThisRoleILearnedToCreate="From this experience, I learned about the versatility and flexibility required for each project, as each one will need a different workflow and methodologies depending on its pain points, product identity, market goals, client subjectivity, deadlines, and more."
        iMac="../../images/imac-1@2x.png"
      />
      <FrameComponent />
      <UXUIDesignerTitle title="Freelance Projects" />
      <section className={styles.productGrid} id='freelance-projects'>
        <div className={styles.gridPositioningParent}>
          <GridPositioning />
        </div>
      </section>
      {/* Personal Projects Section */}
      <UXUIDesignerTitle title="Personal Projects" />
      <ProductGridNavigation />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
