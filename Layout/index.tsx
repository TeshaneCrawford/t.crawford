import React from 'react'

type Props = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <React.Fragment>
      {/* <Head>
        <meta name="viewport" content="initial-scale-1, width=device-width" />
      </Head> */}
      <main>
        {/* <Navbar /> */}
        <div className="flex justify-center bg-letterBox">
          <div className="w-5/6">{children}</div>
        </div>
      </main>
      <footer>{/* <Footer /> */}</footer>
    </React.Fragment>
  );
};

export default Layout;