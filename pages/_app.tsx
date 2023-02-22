import type { AppProps } from 'next/app';
import ExampleNavbar from 'src/layout/nav-bar';
import { primary, secondary } from 'fonts';
import 'styles/globals.css';
import ViewportProvider from 'src/contexts/viewport';

function MyApp({ Component, pageProps }: AppProps) {
  /* Add fonts variables to all pages */
  return (
    <ViewportProvider>
      <div className={`${primary.variable} ${secondary.variable} app-wrapper`}>
        <ExampleNavbar />
        <Component {...pageProps} />
      </div>
    </ViewportProvider>
  );
}

export default MyApp;
