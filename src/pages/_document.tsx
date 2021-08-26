import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';

class MyDocument extends Document<{}> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <Html lang="en" className="p-0">
        <Head />
        <body className="bg-gray-900 text-gray-100 p-0 min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
