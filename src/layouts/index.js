import React from 'react';
import { Head } from "../components/Common/Head/Head";
import "../styles/global.css";

const Layout = ({ children }) => (
  <>
    <Head />
    {children}
  </>
);

export default Layout;