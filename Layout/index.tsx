import React, { useState } from 'react'

import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

export interface Props {
  // routes: Route[];
  // currentRoute?: Route;
  tag?: string;
  slug?: string;
}

const Layout: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      {/* hasNotify isHome routes={routes} */}
      <main>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout