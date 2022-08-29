import React from 'react'
import Head from './Head'
import { Navbar } from './Navbar'
import { Footer } from './Footer'


type Props = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Head />
      <main>
        <Navbar />
        <div className="flex justify-center">
          <div className="w-5/6">{children}</div>
        </div>
      </main>
      <footer><Footer /></footer>
    </React.Fragment>
  );
};

export default Layout;