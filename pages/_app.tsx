// Next modules
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { NextPage } from "next";
//Custom Components
import { Layout } from "../components";
//Styles
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

const MyApp: NextPage<any> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
