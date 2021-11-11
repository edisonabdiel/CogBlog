import React from 'react';
import { ThemeProvider } from 'next-themes';


import '../styles/globals.scss';
import { HeadComponent, Layout } from '../components';

//The theme provider is a wrapper component that provides the theme to the entire application.

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
