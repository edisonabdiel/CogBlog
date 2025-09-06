import React from 'react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import '../styles/globals.scss';
import { HeadComponent, Layout } from '../components';

//The theme provider is a wrapper component that provides the theme to the entire application.

function MyApp({ Component, pageProps }: AppProps) {
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
