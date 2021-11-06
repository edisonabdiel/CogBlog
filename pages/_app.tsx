import React from "react";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from 'next-themes';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider attribute="media class">
            <Component {...pageProps} />
        </ThemeProvider>
    )
};

export default MyApp;
