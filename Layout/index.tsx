import React, { useState } from 'react'

import ScrollToTopButton from "../components/ScrollToTopButton";
import Navbar from "./Navbar";
import Footer from "./Footer/footer.jsx";


export interface Props {
  // routes: Route[];
  // currentRoute?: Route;
  tag?: string;
  slug?: string;
}

const Layout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </React.Fragment>
  )
}

export default Layout