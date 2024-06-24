import * as React from "react";
import { navigate } from "gatsby";
import { Button } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { Header } from "../../components/Common/Header/Header";
import { FrameComponent2 } from "../../components/Home/FrameComponent2/FrameComponent2";
import { ProjectNfo } from "../../components/Home/ProjectNfo/ProjectNfo";
import { FrameComponent } from "../../components/Common/FrameComponent/FrameComponent";
import * as styles from "./index.module.css";

const HomePage = () => {
  const viewProjectRedirect = (project) => navigate(`/projects/${project}`)

  const handleRedirectProjects =  () => navigate('#projects-section')

  return (
    <div className={styles.portfolioSimpleFooter}>
      <Header projectsRedirect={handleRedirectProjects} />
      <main className={styles.content}>
        <div className={styles.frameParent}>
          <FrameComponent2 />
          <div id="projects-section" className={styles.projectsContainer}>
            <div className={styles.projectList}>
              <div className={styles.testimonial}>
                <div className={styles.testimonialContent}>
                  <h1 className={styles.contactTitle}>Projects</h1>
                  <div className={styles.testimonialBackground}>
                    <div className={styles.testimonialBackgroundChild} />
                  </div>
                </div>
              </div>
              <div className={styles.project3}>
                <div className={styles.projectNfo}>
                  <div className={styles.projectLogo}>
                    <StaticImage
                      className={styles.image4Icon}
                      loading="lazy"
                      alt=""
                      src="../../images/home/latech_logo.png"
                    />
                    <div className={styles.projectName}>
                      <h1 className={styles.projectType}>Alex and Ani</h1>
                      <div className={styles.projectTech}>
                        Alex and Ani is a jewelry brand that utilizes Shopify
                        for selling its products. The work process is based on
                        A/B testing and feature implementation with the aim of
                        increasing sales and user retention in the e-commerce
                        platform.
                      </div>
                      <Button
                        className={styles.botoSecudrio}
                        disableElevation
                        variant="outlined"
                        sx={{
                          textTransform: "none",
                          color: "#25282b",
                          fontSize: "18",
                          borderColor: "#25282b",
                          borderRadius: "24px",
                          "&:hover": { borderColor: "#25282b" },
                          width: 152,
                          height: 43,
                        }}
                        onClick={() => viewProjectRedirect("alex-and-ani")}
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
                <StaticImage
                  className={styles.image120Icon}
                  alt=""
                  src="../../images/home/alex_&_ani.png"
                />
              </div>
              <div className={styles.project2}>
                <StaticImage
                  className={styles.image120Icon}
                  alt=""
                  src="../../images/home/iollin.png"
                />
                <div className={styles.projectNfo1}>
                  <div className={styles.wrapperFrame49Parent}>
                    <div className={styles.wrapperFrame49}>
                      <StaticImage
                        className={styles.wrapperFrame49Child}
                        loading="lazy"
                        alt=""
                        src="../../images/home/iollin_logo.png"
                      />
                    </div>
                    <div className={styles.projectDescription}>
                      <b className={styles.text}>iOlliN</b>
                      <div className={styles.text1}>
                        iOlliN provides an ecosystem for the launch and
                        incubation of business projects. It is a crowdfunding
                        platform that utilizes Web3 technologies, allowing
                        entrepreneurs and investors to connect directly. With a
                        focus on blockchain technology, the platform ensures
                        transparency and security in all transactions.
                      </div>
                      <Button
                        className={styles.botoSecudrio1}
                        disableElevation
                        variant="outlined"
                        sx={{
                          textTransform: "none",
                          color: "#25282b",
                          fontSize: "18",
                          borderColor: "#25282b",
                          borderRadius: "24px",
                          "&:hover": { borderColor: "#25282b" },
                          width: 152,
                          height: 43,
                        }}
                        onClick={() => viewProjectRedirect("iollin")}
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className={styles.project31}>
                <div className={styles.projectNfo2}>
                  <div className={styles.image3Parent}>
                    <StaticImage
                      className={styles.image3Icon}
                      loading="lazy"
                      alt=""
                      src="../../images/home/punto_organico_logo.png"
                    />
                    <div className={styles.textParent}>
                      <b className={styles.text2}>Punto Orgánico</b>
                      <div className={styles.text3}>
                        <p className={styles.eCommerceSellingOrganic}>
                          E-commerce selling organic products wholesale and
                          retail with home delivery or in-store pickup.
                        </p>
                        <p className={styles.itIncludesA}>
                          It includes a super-admin where the store owner can
                          edit prices and products, manage sales, and control
                          stock through a dashboard.
                        </p>
                      </div>
                      <Button
                        className={styles.botoSecudrio2}
                        disableElevation
                        variant="outlined"
                        sx={{
                          textTransform: "none",
                          color: "#25282b",
                          fontSize: "18",
                          borderColor: "#25282b",
                          borderRadius: "24px",
                          "&:hover": { borderColor: "#25282b" },
                          width: 152,
                          height: 43,
                        }}
                        onClick={() => viewProjectRedirect('punto-organico')}

                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
                <StaticImage
                  className={styles.image112Icon}
                  alt=""
                  src="../../images/home/punto_organico.png"
                />
              </div>
              <div className={styles.project21}>
                <StaticImage
                  className={styles.image113Icon}
                  alt=""
                  src="../../images/home/flick.png"
                />
                <div className={styles.projectNfo3}>
                  <div className={styles.logoFlickParent}>
                    <div className={styles.logoFlick}>
                      <StaticImage
                        className={styles.bRLogo}
                        loading="lazy"
                        alt=""
                        src="../../images/home/flick_logo.png"
                      />
                    </div>
                    <div className={styles.textGroup}>
                      <b className={styles.text4}>Flick Events</b>
                      <div className={styles.text5}>
                        <p className={styles.aNewWay}>
                          A new way to resell tickets with blockchain
                          technology.
                        </p>
                        <p className={styles.secureAccessTo}>
                          Secure access to the ticket market for sale, resale,
                          auction and exchange. I helped Flick shape its brand
                          and user experience, redesigning the prototype and
                          creating the UI kit.
                        </p>
                      </div>
                      <Button
                        className={styles.botoSecudrio3}
                        disableElevation
                        variant="outlined"
                        sx={{
                          textTransform: "none",
                          color: "#25282b",
                          fontSize: "18",
                          borderColor: "#25282b",
                          borderRadius: "24px",
                          "&:hover": { borderColor: "#25282b" },
                          width: 152,
                          height: 43,
                        }}
                        onClick={() => viewProjectRedirect('flick-events')}

                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.featuredProject}>
                <div className={styles.project1}>
                  <div className={styles.projectNfo4}>
                    <div className={styles.image3Group}>
                      <StaticImage
                        className={styles.image3Icon1}
                        loading="lazy"
                        alt=""
                        src="../../images/home/leones_logo.png"
                      />
                      <div className={styles.featuredContent}>
                        <b className={styles.featuredTitle}>Torneo Leones</b>
                        <div className={styles.featuredSubtitle}>
                          <p
                            className={styles.tableTennisTournament}
                          >{`Table tennis tournament management web application. `}</p>
                          <p className={styles.theProjectWas}>
                            The project was carried out through the company
                            Semillero Latam.
                          </p>
                          <p className={styles.myRoleUi}>
                            My role: UI Designer and participant in UX processes
                            (user experience).
                          </p>
                        </div>
                        <Button
                          className={styles.botoSecudrio4}
                          disableElevation
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            color: "#25282b",
                            fontSize: "18",
                            borderColor: "#25282b",
                            borderRadius: "24px",
                            "&:hover": { borderColor: "#25282b" },
                            width: 152,
                            height: 43,
                          }}
                          onClick={() => viewProjectRedirect('torneo-leones')}

                        >
                          View Project
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.featuredProjectMask}>
                  <StaticImage
                    className={styles.image114Icon}
                    loading="lazy"
                    alt=""
                    src="../../images/home/leones.png"
                  />
                  </div>
                </div>
              </div>
              <div className={styles.project22}>
                <div className={styles.rectangleParent}>
                  <StaticImage
                    className={styles.frameChild}
                    alt=""
                    src="../../images/home/br_logo.png"
                  />
                  <div className={styles.frameGroup}>
                    <div className={styles.termoParent}>
                      <StaticImage
                        className={styles.termoIcon}
                        alt=""
                        src="../../images/home/tommate.png"
                      />
                      <StaticImage
                        className={styles.maskGroupIcon1}
                        alt=""
                        src="/mask-group@2x.png"
                      />
                      <b className={styles.o}>O</b>
                      <b className={styles.t}>T</b>
                    </div>
                    <b className={styles.m}>M</b>
                    <b className={styles.a}>A</b>
                    <b className={styles.m1}>M</b>
                    <b className={styles.a1}>A</b>
                    <b className={styles.e}>E</b>
                  </div>
                  <b className={styles.t1}>T</b>
                </div>
                <ProjectNfo
                  text="TOMAMATE"
                  retailAndWholesaleOfMateE="Retail and wholesale of mate equipment."
                  eCommerceOfArgentineProdu="E-commerce of Argentine products."
                  onBotoSecudrio5Click={() => viewProjectRedirect('tomamate')}
                />
              </div>
              <div className={styles.project32}>
                <div className={styles.projectNfo5}>
                  <div className={styles.frameContainer}>
                    <div className={styles.faviconWrapper}>
                      <div className={styles.favicon}>
                        <div className={styles.b}>B</div>
                        <div className={styles.r}>R</div>
                      </div>
                    </div>
                    <div className={styles.textContainer}>
                      <h1 className={styles.text6}>MS Real Estate</h1>
                      <div className={styles.text7}>
                        Website for buying, selling and renting properties.
                      </div>
                      <Button
                        className={styles.botoSecudrio5}
                        disableElevation
                        variant="outlined"
                        sx={{
                          textTransform: "none",
                          color: "#25282b",
                          fontSize: "18",
                          borderColor: "#25282b",
                          borderRadius: "24px",
                          "&:hover": { borderColor: "#25282b" },
                          width: 152,
                          height: 43,
                        }}
                        onClick={() => viewProjectRedirect('ms-real-estate')}

                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
                <StaticImage
                  className={styles.image115Icon}
                  alt=""
                  src="../../images/home/ms.png"
                />
              </div>
              <div className={styles.project23}>
                <StaticImage
                  className={styles.image116Icon}
                  alt=""
                  src="../../images/home/safe.png"
                />
                <ProjectNfo
                  text="SAFE"
                  retailAndWholesaleOfMateE="Mountain tourism App."
                  eCommerceOfArgentineProdu="Map with information on the area, the possibility of connecting with friends, alert options and tracking in the event of an accident."
                  propBorderRadius="0px var(--br-5xl) var(--br-5xl) 0px"
                  propPadding="var(--padding-5xl) var(--padding-5xl) 150.4px"
                  propGap="41px"
                  onBotoSecudrio5Click={() => viewProjectRedirect('safe')}
                />
              </div>
              <div className={styles.project33}>
                <ProjectNfo
                  text="HOLA"
                  retailAndWholesaleOfMateE="Tourism app, sale of experiences."
                  eCommerceOfArgentineProdu="Planning, selling and booking tourist experiences."
                  propBorderRadius="unset"
                  propPadding="var(--padding-5xl) var(--padding-5xl) 151.4px"
                  propGap="94px"
                  onBotoSecudrio5Click={() => viewProjectRedirect('hola')}
                />
                <StaticImage
                  className={styles.image117Icon}
                  alt=""
                  src="../../images/home/hola.png"
                />
              </div> */}
            </div>
          </div>
        </div>
      </main>
      <FrameComponent />
    </div>
  );
};

export default HomePage;
