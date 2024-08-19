import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import * as styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={[styles.flickeventsPositioningWrapper, className].join(" ")}
    >
      <div className={styles.flickeventsPositioning}>
        <div className={styles.flickeventsAlignment}>
          <div className={styles.flickeventsContainer}>
            <div className={styles.flickeventsContent}>
              <div className={styles.flickeventsDetails}>
                <div className={styles.logoFlick}>
                  <StaticImage
                    className={styles.logoFlickChild}
                    alt=""
                    src="../images/vector-5.svg"
                  />
                </div>
                <div className={styles.flickevents}>Flick.events</div>
              </div>
              <h3 className={styles.flickeventsIsA}>
                Flick.events is a marketplace for buying and reselling event
                tickets. This web app utilizes blockchain technology and Web3.
              </h3>
            </div>
            <div className={styles.inMyRoleContainer}>
              <p className={styles.inMyRole}>
                In my role as a UX/UI designer, I focused on understanding the
                product’s objectives and identifying its pain points,
                particularly in the context of its launch in Argentina, where
                ticket reselling is legally restricted. This presented a unique
                challenge for the team in finding the best way to build user
                trust.
              </p>
              <p className={styles.inMyRole}>&nbsp;</p>
              <p className={styles.inMyRole}>
                After conducting thorough research and gathering relevant data
                through benchmarking, interviews, and surveys, I led the
                creation of user flows with the team. Based on these user flows,
                I then began designing high-fidelity prototypes. Following three
                rounds of user testing with Figma prototypes and product
                iteration, we successfully launched the product into production
                for testing with real users.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.phoneMockup}>
          <div className={styles.iphone13ProParent}>
            <div className={[styles.iphone13Pro, className].join(" ")}>
              <div className={[styles.iphone13Pro, className].join(" ")}>
                <StaticImage
                  className={styles.screenIcon}
                  alt=""
                  src="../images/screen@2x.png"
                />
                <StaticImage
                  className={styles.goldIcon}
                  alt=""
                  src="../images/gold@2x.png"
                />
              </div>
            </div>
            <div className={[styles.iphone13Pro, className].join(" ")}>
              <div className={[styles.iphone13Pro, className].join(" ")}>
                <StaticImage
                  className={styles.screenIcon}
                  alt=""
                  src="../images/screen-1@2x.png"
                />
                <StaticImage
                  className={styles.goldIcon}
                  alt=""
                  src="../images/gold-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
