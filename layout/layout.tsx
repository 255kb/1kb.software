import Head from 'next/head';
import { Fragment, FunctionComponent } from 'react';
import Footer from '../components/footer';
import Nav from '../components/nav';

const Layout: FunctionComponent = function (props) {
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1a76a6" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#aee3ff" />
      </Head>
      <Nav />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
