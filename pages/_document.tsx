import { ColorModeScript } from '@chakra-ui/react'
import * as React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import theme from '../shared/util/Theme';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: React.Children.toArray([initialProps.styles])
        };
    }
    render() {
        return (
            <Html lang='en'>
            <Head />
            <body>
              {/* 👇 Here's the script */}
              <ColorModeScript initialColorMode={theme.config.initialColorMode} />
              <Main />
              <NextScript />
            </body>
          </Html>
        );
    }
}

export default MyDocument;