import * as React from "react";
import { Helmet } from "react-helmet";
import favicon from '../../../images/favicon.png'

const DESCRIPTION = "Bianca Ramonda Porfolio";

export const Head = ({ title }) => {
  const headTitle = title ?? "Bianca Ramonda";

  return (
    <Helmet>
      <title>{headTitle}</title>
      <link rel="icon" href={favicon} />
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
