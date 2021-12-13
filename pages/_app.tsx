import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { themes, GlobalStyles } from "styles";

import Head from "next/head";
import * as C from "components";
import Providers from "contexts/Providers";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Providers pageProps={pageProps}>
        <ThemeProvider theme={themes.defaultTheme}>
          <GlobalStyles />

          <C.Layout>
            <Component {...pageProps} />
          </C.Layout>
        </ThemeProvider>
      </Providers>
    </>
  );
}

export default MyApp;
