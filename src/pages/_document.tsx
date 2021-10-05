import Document, {Html, Head, Main, NextScript} from 'next/document';
import type {ReactElement} from 'react';

class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render(): ReactElement {
    return (
      <Html lang="en" className="p-0">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {/* <link rel="shortcut icon" type="image/jpg" href="logo.svg" /> */}
        </Head>
        <body className="bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
