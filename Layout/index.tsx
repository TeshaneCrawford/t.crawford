import React from 'react'
import Head from './Head'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Container, Box } from '@chakra-ui/react';


type Props = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Head />
      <Box>
      <main>
        <Navbar />
        <div className="flex justify-center">
          <div className="w-5/6">{children}</div>
        </div>
      </main>
      <footer><Footer /></footer>
      </Box>
    </React.Fragment>
  );
};

export default Layout;