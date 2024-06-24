import * as React from "react";
import Slider from "react-slick";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Header } from "../../../components/Projects/Header/Header";
import { ResponsibilitiesGrid } from "../../../components/Projects/FrameComponent4/ResponsabilitesGrid/ResponsabilitiesGrid";
import { FrameComponent } from "../../../components/Common/FrameComponent/FrameComponent";
import * as styles from "./index.module.css";

const sliderSettings = {
  dots: true,
  speed: 500,
  lazyLoad: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  focusOnSelect: true,
};

const IollinPage = () => {
  const onArrowClick = () => navigate("/");

  return (
    <div className={styles.portfolioIollin}>
      <main className={styles.headerParent}>
        <Header onArrowClick={onArrowClick} />
        <section className={styles.content}>
          <div className={styles.projectOverview}>
            <div className={styles.projectDescription}>
              <h1 className={styles.fintecifyIollin}>Fintecify | iOlliN</h1>
              <div className={styles.iollinIsAContainer}>
                <p className={styles.iollinIsA}>
                  iOlliN is a Web3 crowdfunding platform designed to support
                  anyone with a great idea, business, product or cause [what we
                  call projects]. It utilizes blockchain technology to provide a
                  secure and transparent way for innovative projects to receive
                  financial backing through Semi-Fungible Tokens (SFTs).
                </p>
                <ul className={styles.crowdfundingEntrepreneursCa}>
                  <li className={styles.crowdfundingEntrepreneursCa1}>
                    CROWDFUNDING: Entrepreneurs can access funding opportunities
                    by issuing semi-fungible tokens, empowering them to garner
                    essential financial support for their groundbreaking
                    initiatives.
                  </li>
                  <li className={styles.businessAiMentorship}>
                    BUSINESS A.I. MENTORSHIP: Through LaunchA.I., our
                    cutting-edge A.I.-powered mentorship platform, iOlliN
                    delivers tailored guidance to entrepreneurs, equipping them
                    with the strategic insights needed to successfully navigate
                    the intricacies of project launch and development.
                  </li>
                  <li className={styles.fastIdeaValidation}>
                    FAST IDEA VALIDATION: Backers benefit from a diverse
                    portfolio of supported ideas and entrepreneurs, engaging in
                    a dynamic process that facilitates the validation and
                    support of promising ventures.
                  </li>
                  <li>
                    POWERFUL COMMUNITY BUILDING: iOlliN cultivates a dynamic and
                    inclusive community, providing a platform for like-minded
                    individuals to connect, collaborate, and exchange ideas.
                    This vibrant community enriches the journey of
                    purpose-driven individuals striving to make a meaningful
                    impact on the world.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.roleDetailsParent}>
              <div className={styles.roleDetails}>
                <b className={styles.myRole}>My role:</b>
                <div className={styles.responsibilities}>
                  <ResponsibilitiesGrid
                    firstImage={
                      <StaticImage
                        className={styles.pieChartIcon}
                        loading="lazy"
                        alt=""
                        src="../../../images/iollin/role_first.png"
                      />
                    }
                    secondImage={
                      <StaticImage
                        className={styles.pieChartIcon}
                        loading="lazy"
                        alt=""
                        src="../../../images/iollin/role_second.png"
                      />
                    }
                    websiteQualityAssuranceTo="Information Design: Create user flow diagrams. Develop maps of site and information architecture."
                    searchForSolutionsThrough="Prototyping and Wireframing: Create low and high fidelity prototypes. Design wireframes to plan the interface structure."
                    propMinWidth="258px"
                  />
                  <ResponsibilitiesGrid
                    firstImage={
                      <StaticImage
                        className={styles.pieChartIcon}
                        loading="lazy"
                        alt=""
                        src="../../../images/iollin/role_three.png"
                      />
                    }
                    secondImage={
                      <StaticImage
                        className={styles.pieChartIcon}
                        loading="lazy"
                        alt=""
                        src="../../../images/iollin/role_four.png"
                      />
                    }
                    websiteQualityAssuranceTo="User Interface (UI) Design: Design the graphical interface of the"
                    searchForSolutionsThrough="User Testing: Perform concept tests and design evaluations to obtain user feedback."
                    propMinWidth="258px"
                  />
                  <div className={styles.awardParent}>
                    <StaticImage
                      className={styles.awardIcon}
                      loading="lazy"
                      alt=""
                      src="../../../images/iollin/role_five.png"
                    />
                    <div className={styles.qaForDeveloped}>
                      QA for developed releases: ensuring frontend development
                      aligns consistently with the Figma design.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.prototyping}>
                <div className={styles.theChallengeWeSeekToAddreParent}>
                  <h1 className={styles.theChallengeWe}>
                    The challenge we seek to address:
                  </h1>
                  <div className={styles.contemporaryEntrepreneursEnc}>
                    Contemporary entrepreneurs encounter a myriad of obstacles
                    in nurturing their ideas and projects to fruition. These
                    hurdles include: limited access to investors, inadequate
                    resources for execution, a dearth of comprehensive
                    information on project stages and implementation, and a
                    shortage of supportive contacts conducive to project growth,
                    among others.
                  </div>
                  <div className={styles.challengeImage}>
                    <StaticImage
                      className={styles.image95Icon}
                      loading="lazy"
                      alt=""
                      src="../../../images/iollin/first_step.png"
                    />
                  </div>
                </div>
                <h1 className={styles.theUxuiDesign}>
                  The UX/UI design workflow:
                </h1>
                <div className={styles.informationArchitectureAndUParent}>
                  <h1 className={styles.informationArchitectureAnd}>
                    Information architecture and user flows:
                  </h1>
                  <div className={styles.weCollaborateInContainer}>
                    <p className={styles.weCollaborateIn}>
                      We collaborate in Miro and Figma to create the information
                      architecture and user flows, working closely with the
                      Scrum team specialized in blockchain.
                    </p>
                    <p className={styles.blankLine}>&nbsp;</p>
                    <p className={styles.informationArchitectureAnd1}>
                      Information architecture and user flows helped us
                      organize, structure, and label content effectively and
                      understandably for users. This development was crucial for
                      understanding navigation within the platform and the
                      critical information we needed to consider before starting
                      to design low-fidelity prototypes.
                    </p>
                  </div>
                  <div className={styles.carouselContainer}>
                    <Slider {...sliderSettings}>
                      <div>
                        <StaticImage
                          alt=""
                          src="../../../images/iollin/architecture-carousel/one.png"
                        />
                      </div>
                      <div>
                        <StaticImage
                          alt=""
                          src="../../../images/iollin/architecture-carousel/two.png"
                        />
                      </div>
                      <div>
                        <StaticImage
                          alt=""
                          src="../../../images/iollin/architecture-carousel/three.png"
                        />
                      </div>
                    </Slider>
                  </div>
                </div>
                <div className={styles.prototypingDescription}>
                  <b className={styles.lowFidelityPrototypes}>
                    Low-fidelity prototypes:
                  </b>
                  <div className={styles.theLowFidelityPrototypes}>
                    The low-fidelity prototypes were designed based on the
                    information architecture and user flow. Client involvement
                    was crucial in this stage to validate functionalities,
                    information layouts, and to rethink various structures,
                    aiming to create a prototype that is structurally easy for
                    the user to navigate.
                  </div>
                  <div className={styles.carouselContainer}>
                    <Slider {...sliderSettings}>
                      <div>
                        <StaticImage
                          alt=""
                          src="../../../images/iollin/prototypes-carousel/one.png"
                        />
                      </div>
                      <div>
                        <StaticImage
                          alt=""
                          src="../../../images/iollin/prototypes-carousel/two.png"
                        />
                      </div>
                      <div>
                        <StaticImage
                          alt=""
                          src="../../../images/iollin/prototypes-carousel/three.png"
                        />
                      </div>
                      <div>
                        <StaticImage
                          alt=""
                          src="../../../images/iollin/prototypes-carousel/four.png"
                        />
                      </div>
                    </Slider>
                  </div>
                </div>
                <div className={styles.prototypingDescription1}>
                  <h1 className={styles.theBigChallenge}>
                    The big challenge for iOlliN
                  </h1>
                  <div className={styles.weBeganWithContainer}>
                    <p className={styles.weBeganWith}>
                      We began with desktop version prototypes as it was a
                      specific requirement from the client.
                    </p>
                    <p className={styles.weDividedThe}>
                      We divided the work into various flows per sprint,
                      allowing us to organize the design and development tasks
                      effectively.
                    </p>
                    <p className={styles.theFlowsWe}>
                      The flows we worked on include:
                    </p>
                    <ul className={styles.loginsignUpKycProcessId}>
                      <li className={styles.loginsignUp}>Login/sign up.</li>
                      <li className={styles.kycProcessIdentity}>
                        KYC Process (identity verification process).
                      </li>
                      <li className={styles.chatbot}>ChatBot.</li>
                      <li className={styles.profilesAndProfile}>
                        Profiles and profile settings (user profile/entrepreneur
                        profile/empty profile).
                      </li>
                      <li className={styles.postsInGiving}>
                        Posts in giving back section.
                      </li>
                      <li className={styles.projectCreation}>
                        Project creation.
                      </li>
                      <li className={styles.projectsCommentingSystem}>
                        Projects: commenting system and support with crypto
                        (support projects).
                      </li>
                      <li className={styles.footerDisclaimerabout}>
                        Footer + disclaimer/about us/help center/terms of
                        service.
                      </li>
                      <li>Wallet: Convert to + Fund wallet + Withdraw.</li>
                    </ul>
                  </div>
                  <div className={styles.carouselContainer}>
                    <Slider {...sliderSettings}>
                      <div>
                        <StaticImage
                          alt=""
                          src="../../../images/iollin/challenges-carousel/one.png"
                        />
                      </div>
                      <div>
                        <StaticImage
                          alt=""
                          src="../../../images/iollin/challenges-carousel/two.png"
                        />
                      </div>
                      <div>
                        <StaticImage
                          alt=""
                          src="../../../images/iollin/challenges-carousel/three.png"
                        />
                      </div>
                      <div>
                        <StaticImage
                          alt=""
                          src="../../../images/iollin/challenges-carousel/four.png"
                        />
                      </div>
                    </Slider>
                  </div>
                </div>
                <div className={styles.nSummaryAndAsAClosingStaParent}>
                  <h1 className={styles.nSummaryAnd}>
                    In summary and as a closing statement:
                  </h1>
                  <div className={styles.thisProjectIsContainer}>
                    <p className={styles.thisProjectIs}>
                      This project is still ongoing, and currently, we are in an
                      advanced development stage where our design focus lies in
                      conducting QA on the screens and flows developed. We are
                      testing various functionalities, creating multiple
                      profiles, uploading projects, commenting, applying
                      ratings, and conducting live sessions to identify pain
                      points, potential improvements, and provide pixel-perfect
                      feedback for the developers.
                    </p>
                    <p className={styles.thisReviewStage}>
                      This review stage is crucial for refining and fixing what
                      we have already developed before moving forward with all
                      the necessary optimized functions or aspects, in
                      preparation for user testing. The goal is to test the
                      platform with 50 users and gather feedback based on their
                      experience. This test will be conducted in various
                      percentages and formats. Specifically, we plan to hold
                      individual meetings with 10 users each, testing the login
                      and project publication; with another 10 users, testing
                      login and support for an external project, including
                      comments and ratings; and finally, the remaining 30 users
                      will test the wallet functionality.
                    </p>
                    <p className={styles.asResourcesFor}>
                      As resources for gathering feedback, we will use virtual
                      meetings where screens will be presented, along with UX
                      observations, and a Google Form will be created with key
                      questions, allowing users to anonymously share their
                      concerns or opinions.
                    </p>
                  </div>
                </div>
                <div className={styles.designSystemParent}>
                  <b className={styles.designSystem}>Design system</b>
                  <div className={styles.theComplexityOfContainer}>
                    <p className={styles.theComplexityOf}>
                      The complexity of the application required various screens
                      that included all kinds of components and covered all the
                      corresponding functions: landing page, login, home, search
                      results, ticket details, purchase confirmation, tutorials,
                      profile, put on sale process, exchange, withdraw and the
                      different casuistics of each screen.
                    </p>
                    <p className={styles.toMaintainConsistency}>
                      To maintain consistency and ensure efficient design for
                      development transfer, I created a design system based on
                      reusable components with their respective states, ordered
                      molecularly: from organisms to molecules.
                    </p>
                  </div>
                  <StaticImage
                    className={styles.image107Icon}
                    loading="lazy"
                    alt=""
                    src="../../../images/iollin/six_step.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FrameComponent />
    </div>
  );
};

export default IollinPage;
