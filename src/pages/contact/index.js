import * as React from "react";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FrameComponent1 } from "../../components/Contact/FrameComponent1/FrameComponent1";
import { FrameComponent3 } from "../../components/Contact/FrameComponent3/FrameComponent3";
import { FrameComponent } from "../../components/Common/FrameComponent/FrameComponent";
import * as styles from "./index.module.css";

const ContactPage = () => {
  const onTabActiveClick = () => {
    navigate("/about");
  };

  const onTabDefaultClick = () => {
    navigate("/#projects-section");
  };

  return (
    <div className={styles.contact}>
      <header className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.tabActive} onClick={onTabActiveClick}>
            <a className={styles.sobre}>About</a>
            <div className={styles.activeTabBackground} />
          </div>
          <div className={styles.tabDefault} onClick={onTabDefaultClick}>
            <a className={styles.sobre1}>Projects</a>
          </div>
          <div className={styles.tabActive1}>
            <a className={styles.sobre2}>Contacts</a>
            <div className={styles.tabActiveChild} />
          </div>
        </div>
      </header>
      <section className={styles.mainContentWrapper}>
        <div className={styles.mainContent}>
          <div className={styles.frameParent}>
            <div className={styles.uiuxDesignerParent}>
              <b className={styles.uiuxDesigner}>UI/UX Designer</b>
              <b className={styles.title}>Bianca Ramonda</b>
            </div>
            <div className={styles.profilePicture}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <StaticImage
                  className={styles.maskGroupIcon}
                  alt=""
                  src="../../images/portrait.png"
                />
              </div>
            </div>
          </div>
          <FrameComponent1 contactTitle="Contact Me" />
        </div>
      </section>
      <FrameComponent3 />
      <FrameComponent />
    </div>
  );
};

export default ContactPage;
