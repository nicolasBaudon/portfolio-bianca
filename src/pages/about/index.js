import * as React from "react";
import { navigate } from "gatsby";
import { MainContent } from "../../components/About/MainContent/MainContent";
import { FrameComponent } from "../../components/Common/FrameComponent/FrameComponent";
import * as styles from "./index.module.css";

const AboutPage = () => {
  const onTabActive1Click = () => {
    navigate("/#projects-section");
  }

  const onTabDefaultClick = () => {
    navigate("/contact");
  }

  return (
    <div className={styles.aboutSimpleFooter}>
      <header className={styles.simpleFooter}>
        <div className={styles.header}>
          <div className={styles.nav}>
            <div className={styles.tabActive}>
              <a className={styles.sobre}>About</a>
              <div className={styles.activeTabBackground} />
            </div>
            <div className={styles.tabActive1} onClick={onTabActive1Click}>
              <a className={styles.sobre1}>Projects</a>
              <div className={styles.tabActiveChild} />
            </div>
            <div className={styles.tabDefault} onClick={onTabDefaultClick}>
              <a className={styles.sobre2}>
                Contacts
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.content}>
        <MainContent />
      </section>
      <FrameComponent />
    </div>
  );
};

export default AboutPage;
