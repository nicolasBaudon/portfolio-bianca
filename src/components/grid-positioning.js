import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import * as styles from "./grid-positioning.module.css";

const GridPositioning = ({ className = "" }) => {
  return (
    <div className={[styles.gridPositioning, className].join(" ")}>
      <div className={styles.gridContainer}>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              loading="lazy"
              alt=""
              src="../images/image-container@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>A/B Testing Service</b>
              <div className={styles.paragraphPostDescription}>
                <span className={styles.o}>O</span>
                <span className={styles.ptimizationOfLanding}>
                  ptimization of Landing Page Using A/B Testing with the Goal of
                  Increasing Click Metrics and Time on Site.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              loading="lazy"
              alt=""
              src="../images/image-container-1@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>Landing Page Service</b>
              <div className={styles.paragraphPostDescription}>
                Landing Page Customization by modules and templates.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              loading="lazy"
              alt=""
              src="../images/image-container-2@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>
                Landing Page | Streaming Page
              </b>
              <div className={styles.paragraphPostDescription}>
                Design of a landing page for streamers to centralize their views
                on a personalized platform with their own brand, rather than on
                YouTube or other sites.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              loading="lazy"
              alt=""
              src="../images/image-container-3@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle3}>Landing Page Design</b>
              <div className={styles.paragraphPostDescription}>
                Design of a landing page for a company that sells technological
                solutions using various artificial intelligences.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              loading="lazy"
              alt=""
              src="../images/image-container-8@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>Landing Page Optimization</b>
              <div className={styles.paragraphPostDescription}>
                Landing page optimization through the identification of pain
                points and alignment with client objectives.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              loading="lazy"
              alt=""
              src="../images/image-container-9@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle1}>{`Landing Page | Web app `}</b>
              <div className={styles.paragraphPostDescription}>
                Landing page optimization with the goal of providing relevant
                information to users so they understand the benefits of using
                the tool
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              loading="lazy"
              alt=""
              src="../images/image-container-10@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>Landing Page | Video Game</b>
              <div className={styles.paragraphPostDescription}>
                Landing page for video game developers, aimed at promoting their
                games and services.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              loading="lazy"
              alt=""
              src="../images/image-container-11@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>
                Landing Page | Education Institution
              </b>
              <div className={styles.paragraphPostDescription}>
                Design of a landing page for an educational platform that
                provides training services to various companies for their
                employees.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              loading="lazy"
              alt=""
              src="../images/image-container-12@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>
                Landing Page | Digital Solutions
              </b>
              <div className={styles.paragraphPostDescription}>
                Landing page for software factory start up.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              alt=""
              src="../images/image-container-13@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>Landing Page | Coffee Bar</b>
              <div className={styles.paragraphPostDescription}>
                Landing page design for a coffee bar that aims to showcase
                promotions and the menu to clients.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              alt=""
              src="../images/image-container-14@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>Landing Page Design</b>
              <div className={styles.paragraphPostDescription}>
                Design of a landing page for a software factory with the goal of
                reaching clients through it.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              alt=""
              src="../images/image-container-15@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>
                Landing Page | Developers Team
              </b>
              <div className={styles.paragraphPostDescription}>
                Landing page for a backend development team focused on
                cybersecurity for multinational companies.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              alt=""
              src="../images/image-container-16@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>Landing Page | AI Service</b>
              <div className={styles.paragraphPostDescription}>
                Landing page for a client offering personalized artificial
                intelligence services to other businesses.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              alt=""
              src="../images/image-container-17@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>Landing Page | AI Service</b>
              <div className={styles.paragraphPostDescription}>
                Landing page for a client offering personalized artificial
                intelligence services to other businesses.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              alt=""
              src="../images/image-container-18@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>
                Landing Page | Personal Portfolio
              </b>
              <div className={styles.paragraphPostDescription}>
                Design of a landing page as a portfolio for a client
                specializing in audiovisual editing.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              alt=""
              src="../images/image-container-19@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>Landing Page Optimization</b>
              <div className={styles.paragraphPostDescription}>
                Optimization of the software factory landing page to increase
                click metrics and user engagement.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              alt=""
              src="../images/image-container-20@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>
                Landing Page | Turism Website
              </b>
              <div className={styles.paragraphPostDescription}>
                Redesign of the landing page for a tourism company with the goal
                of attracting international clients to experience local tourism
                in Argentina.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.imageContainerWrapper}>
            <div className={styles.imageContainer}>
              <StaticImage
                className={styles.image121Icon}
                loading="lazy"
                alt=""
                src="../images/image-121@2x.png"
              />
            </div>
          </div>
          <div className={styles.h4PostTitleParent}>

          <b className={styles.h4PostTitle}>
            Landing Page | Financial Company
          </b>
          <div className={styles.paragraphPostDescription}>
            Optimization of the landing page for a financial company in
            Argentina, Chile, and Uruguay.
          </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              alt=""
              src="../images/image-container-21@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b
                className={styles.h4PostTitle}
              >{`Landing Page | Professional Mentors `}</b>
              <div className={styles.paragraphPostDescription}>
                Landing page for a team of professional mentors seeking junior
                professionals who need guidance and want to improve in their
                field.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              alt=""
              src="../images/image-container-22@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>
                Landing Page | Business Solutions
              </b>
              <div className={styles.paragraphPostDescription}>
                Optimization and redesign of the landing page with the goal of
                increasing metrics and reaching the desired users.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <div className={styles.productLayoutsSmall}>
            <StaticImage
              className={styles.imageContainerIcon}
              alt=""
              src="../images/image-container-23@2x.png"
            />
            <div className={styles.h4PostTitleParent}>
              <b className={styles.h4PostTitle}>
                Landing Page | Security Service
              </b>
              <div className={styles.paragraphPostDescription}>
                Landing page for a company providing private security services
                in the Mendoza area.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GridPositioning.propTypes = {
  className: PropTypes.string,
};

export default GridPositioning;
