import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="media class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
