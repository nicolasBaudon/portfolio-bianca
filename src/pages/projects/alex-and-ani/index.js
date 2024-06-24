import * as React from "react";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Header } from "../../../components/Projects/Header/Header";
import { FrameComponent } from "../../../components/Common/FrameComponent/FrameComponent";
import { FrameComponent4 } from "../../../components/Projects/FrameComponent4/FrameComponent4";
import { StepTwo } from "../../../components/Projects/StepTwo/StepTwo";
import { StepThree } from "../../../components/Projects/StepThree/StepThree";
import { StepFour } from "../../../components/Projects/StepFour/StepFour";
import * as styles from "./index.module.css";

const AlexAndAniPage = () => {
  const onArrowClick = () => navigate("/");

  return (
    <div className={styles.portfolioAa}>
      <Header onArrowClick={onArrowClick} />
      <main className={styles.content}>
        <section className={styles.projectInfo}>
          <div className={styles.projectTitle}>
            <h1 className={styles.latechFactory}>
              Latech Factory | Alex and Ani Client
            </h1>
            <div className={styles.alexAndAniContainer}>
              <p
                className={styles.alexAndAni}
              >{`Alex and Ani is a jewelry with an e-commerce platform, meaning an online store where it sells its products directly to customers through its official website. `}</p>
              <p className={styles.currentlyLatechProvides}>
                Currently, Latech provides services to this brand to increase
                its sales and enhance the user experience of the website. As
                part of the service, the design team offers A/B testing
                proposals to address various issues or implement improvements.
              </p>
            </div>
          </div>
          <FrameComponent4 />
          <div className={styles.forLegalPrivacyReasonsIAParent}>
            <div className={styles.forLegalPrivacy}>
              For legal privacy reasons, I am unable to showcase the designs and
              work processes involving Alex and Ani. However, I can offer an
              overview of our step-by-step working format.
            </div>
            <div className={styles.stepOne}>
              <h1 className={styles.identifyPainPoints}>
                1° Identify pain points
              </h1>
              <div className={styles.inTheFirst}>
                In the first step of each project, we focus on identifying pain
                points based on the client's specific objectives regarding their
                e-commerce platform. This involves a comprehensive analysis of
                the user experience, pinpointing areas of friction or
                dissatisfaction that may hinder online business success.
              </div>
              <StaticImage
                className={styles.image79Icon}
                loading="lazy"
                alt=""
                src="../../../images/alex&ani/step_one.png"
              />
            </div>
          </div>
          <StepTwo />
          <StepThree />
          <StepFour />
        </section>
      </main>
      <FrameComponent />
    </div>
  );
};

export default AlexAndAniPage;
