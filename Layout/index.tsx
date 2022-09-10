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
    <div id="app-container">
    <Header />
    <Navbar />
    {/* hasNotify isHome routes={routes} */}
    <Container
      alignContent="space-between"
      as="main"
      className="main-container"
      css={{
        position: "relative",
        minHeight: "100vh",
        "@mdMax": {
          overflowX: "hidden",
        },
      }}
      display="flex"
      id="main-container"
      lg={true}
    >
      {children}
      <Footer />
    </Container>
  </div>
  )
}

export default Layout