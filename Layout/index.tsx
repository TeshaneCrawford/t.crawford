import React from 'react'
import {Container} from "@nextui-org/react";

import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

export interface Props {
  // routes: Route[];
  // currentRoute?: Route;
  tag?: string;
  slug?: string;
}

const Layout: React.FC<React.PropsWithChildren<Props>> = ({children}) => {
  return (
    <main className='container px-4 mx-auto'>
    <Header />
    <Navbar />
    {/* hasNotify isHome routes={routes} */}
    <Container>
      {children}
      <Footer />
    </Container>
  </main>
  )
}

export default Layout