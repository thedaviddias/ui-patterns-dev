import {
  Head,
  Html,
  Main,
  default as NextDocument,
  NextScript,
} from 'next/document'

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document
