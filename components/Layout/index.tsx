import React from 'react';

import Head from './Head';
import Footer from './Footer';
import Navbar from './Navbar';

import { Box } from "@chakra-ui/react"


type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Head title={'Teshane Crawford Portfolio'} />
      <div>
        <nav>
          <Navbar />
        </nav>
        <main>
        <Box sx={{ minHeight: '110vh' }}> {children}</Box>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Layout;