import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap&text=La+Baleine+Bleue"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-labaleinebleue-blue">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
