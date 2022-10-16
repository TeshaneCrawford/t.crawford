import React from 'react';
import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';


class MyDocument extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Barlow */}
          <link
            rel="preload"
            href="/fonts/Barlow/Barlow-400.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Barlow/Barlow-500.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Barlow/Barlow-600.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Barlow/Barlow-700.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Barlow/Barlow-800.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* Inter */}
          <link
            rel="preload"
            href="/fonts/Inter-var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link
            rel="stylesheet"
            href="https://unpkg.com/@tailwindcss/typography@0.4.x/dist/typography.min.css"
          />
        </Head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <body className=''>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;