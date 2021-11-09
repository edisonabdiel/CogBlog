import React from 'react';
import { ThemeProvider } from 'next-themes';


import '../styles/globals.scss';
import { HeadComponent, Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <HeadComponent />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
