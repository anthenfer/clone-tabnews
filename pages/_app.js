import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/img/icon.png?v=1"
          type="image/png"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}