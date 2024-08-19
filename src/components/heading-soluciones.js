import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import * as styles from "./heading-soluciones.module.css";

const HeadingSoluciones = ({ className = "" }) => {
  return (
    <div className={[styles.headingSoluciones, className].join(" ")}>
      <div className={styles.headingPositioning}>
        <div className={styles.headingAlignment}>
          <StaticImage
            className={styles.headingAlignmentChild}
            loading="lazy"
            alt=""
            src="../images/group-1@2x.png"
          />
          <div className={styles.headingContent}>
            <div className={styles.heading2}>UX/UI Designer</div>
            <h1 className={styles.biancaRamondaLemos}>Bianca Ramonda Lemos</h1>
          </div>
        </div>
        <div className={styles.iAmBiancaContainer}>
          <p className={styles.iAmBiancaRamondaAUxuiD}>
            <span
              className={styles.iAmBianca}
            >{`I am Bianca Ramonda, a UX/UI Designer from Mendoza, Argentina. My career began in startups focused on `}</span>
            <span className={styles.mvpProducts}>MVP products</span>
            <span className={styles.span}>{`, `}</span>
            <span className={styles.mvpProducts}>blockchain</span>
            <span className={styles.span}>{` technology, and `}</span>
            <span className={styles.mvpProducts}>Web3</span>
            <span
              className={styles.span}
            >{` applications. I later worked at a software factory, where I developed `}</span>
            <span className={styles.mvpProducts}>A/B testing</span>
            <span
              className={styles.span}
            >{` proposals for Shopify clients, refining my skills in user experience and `}</span>
            <span className={styles.mvpProducts}>data-driven design.</span>
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.iAmBiancaRamondaAUxuiD}>
            <span
              className={styles.iAmBianca}
            >{`Currently, I work on two different apps—one leveraging blockchain technology, where I iterate the product based on user metrics, and another app from Argentina, where I focus on redesigning the application to enhance `}</span>
            <span className={styles.mvpProducts}>user experience</span>
            <span
              className={styles.span}
            >{`. Alongside these roles, I specialize in UX/UI design for `}</span>
            <span className={styles.mvpProducts}>
              landing pages and websites
            </span>
            <span
              className={styles.span}
            >{`, aiming to help businesses effectively communicate, capture client attention, and increase engagement and conversions. `}</span>
          </p>
          <p className={styles.blankLine1}>&nbsp;</p>
          <p className={styles.iAmBiancaRamondaAUxuiD}>
            <span className={styles.span}>{`My `}</span>
            <span className={styles.mvpProducts}>advanced skills in Figma</span>
            <span className={styles.iAmBianca}>
              , coupled with a deep interest in A/B testing and best practices
              in user experience, drive my continuous pursuit of excellence in
              design.
            </span>
          </p>
        </div>
        <div className={styles.skillIcons}>
          <StaticImage
            className={styles.skillIconsfigmaDark}
            loading="lazy"
            alt=""
            src="../images/skilliconsfigmadark@2x.png"
          />
          <div className={styles.simpleIconsmiro}>
            <StaticImage
              className={styles.skillIcon}
              loading="lazy"
              alt=""
              src="../images/vector.svg"
            />
          </div>
          <StaticImage
            className={styles.logostrelloIcon}
            loading="lazy"
            alt=""
            src="../images/logostrello.svg"
          />
          <StaticImage
            className={styles.skillIconsfigmaDark}
            alt=""
            src="../images/skilliconsdiscord@2x.png"
          />
          <StaticImage
            className={styles.logostrelloIcon}
            alt=""
            src="../images/logosslackicon.svg"
          />
          <StaticImage className={styles.logostrelloIcon} alt="" src="../images/logosjira.svg" />
          <StaticImage
            className={styles.logostrelloIcon}
            loading="lazy"
            alt=""
            src="../images/simpleiconsnotion.svg"
          />
          <StaticImage
            className={styles.logosshopifyIcon}
            alt=""
            src="../images/logosshopify.svg"
          />
          <StaticImage
            className={styles.image123Icon}
            loading="lazy"
            alt=""
            src="../images/image-123@2x.png"
          />
          <StaticImage
            className={styles.image123Icon}
            loading="lazy"
            alt=""
            src="../images/image-122@2x.png"
          />
          <StaticImage
            className={styles.logostrelloIcon}
            alt=""
            src="../images/devicongoogle.svg"
          />
        </div>
      </div>
    </div>
  );
};

HeadingSoluciones.propTypes = {
  className: PropTypes.string,
};

export default HeadingSoluciones;
