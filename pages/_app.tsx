import 'styles/globals.css';
import type { AppProps } from 'next/app';
import ExampleNavbar from 'src/sections/nav-bar';
import { inter, roboto } from 'fonts';
import { ApolloProvider } from '@apollo/client';
import client from 'src/backend/client';

function MyApp({ Component, pageProps }: AppProps) {
  /*Add fonts variables to all pages*/
  return (
    <ApolloProvider client={client}>
      <div
        className={`${roboto.variable} ${inter.variable} text-black dark:text-slate-200 transition-colors ease-in`}
      >
        <ExampleNavbar />
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
