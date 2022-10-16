import React, { useState } from 'react'

import Header from "./Header";
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