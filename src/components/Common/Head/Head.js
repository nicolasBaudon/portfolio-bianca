import * as React from "react";
import { Helmet } from "react-helmet";
import favicon from '../../../images/favicon.png'

const DESCRIPTION = "Bianca Ramonda Porfolio";

export const Head = ({ title }) => {
  const headTitle = title ?? "Bianca Ramonda | UX/UI Designer";

  return (
    <Helmet>
      <title>{headTitle}</title>
      <link rel="icon" href={favicon} />
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="description" content={DESCRIPTION} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={headTitle} />
      <meta name="twitter:description" content={DESCRIPTION} />

      {/* Open Graph */}
      <meta property="og:title" content={headTitle} key="ogtitle" />
      <meta property="og:description" content={DESCRIPTION} key="ogdesc" />
      <meta property="og:type" content="website" key="ogtype" />
    </Helmet>
  );
};
