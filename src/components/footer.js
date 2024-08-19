import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./product-grid-navigation.module.css";

const Footer = () => {
  const socialRedirect = (url) => window.open(url, "_blank");

  const downloadResume = () =>
    window.open(
      "/files/ResumeBiancaRamonda.pdf",
      "_blank",
      "noopener noreferrer"
    );

  return (
    <footer className={styles.contactPortfolios} id="contact-section">
      <div className={styles.container}>
        <div className={styles.contactPortfoliosContainer}>
          <div className={styles.contactPortfolios1}>Contact & Portfolios</div>
        </div>
        <div className={styles.socialLinksContainer}>
          <div
            className={styles.socialLinks}
            onClick={() =>
              socialRedirect(
                "https://www.linkedin.com/in/bianca-ramonda-lemos-bb483217b/"
              )
            }
          >
            <StaticImage
              className={styles.deviconlinkedin}
              loading="lazy"
              alt=""
              src="../images/deviconlinkedin.svg"
            />
          </div>
          <div
            className={styles.socialLinks1}
            onClick={() => socialRedirect("https://www.behance.net/f9ce885d")}
          >
            <StaticImage
              className={styles.behanceIcon}
              loading="lazy"
              alt=""
              src="../images/behance.svg"
            />
          </div>
          <div
            className={styles.socialLinks}
            onClick={() => socialRedirect("https://dribbble.com/BiancaRL")}
          >
            <StaticImage
              className={styles.dribbbleIcon}
              loading="lazy"
              alt=""
              src="../images/dribbble.svg"
            />
          </div>
          <div
            className={styles.socialLinks2}
            onClick={() => socialRedirect("mailto:biancaramonda@gmail.com")}
          >
            <StaticImage
              className={styles.gmailIcon}
              alt=""
              src="../images/gmail.svg"
            />
          </div>
          <button
            className={styles.resumeDownloadContainer}
            onClick={downloadResume}
          >
            <StaticImage
              className={styles.downloadIcon}
              alt=""
              src="../images/download.svg"
            />
            <div className={styles.downloadResume}>Download Resume</div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
