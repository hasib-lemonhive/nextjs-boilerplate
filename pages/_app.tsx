import 'styles/globals.css';
import type { AppProps } from 'next/app';
import ExampleNavbar from 'src/sections/nav-bar';
import { inter, roboto } from 'fonts';

function MyApp({ Component, pageProps }: AppProps) {
  /*Add fonts variables to all pages*/
  return (
    <>
      <div
        className={`${roboto.variable} ${inter.variable} text-black dark:text-slate-200 transition-colors ease-in`}
      >
        <ExampleNavbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
