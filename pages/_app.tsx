import type { AppProps } from 'next/app';
import ExampleNavbar from 'src/layout/nav-bar';
import { primary, secondary } from 'fonts';
import 'styles/globals.css';
import ViewportProvider from 'src/contexts/viewport';
import OffsetProvider from 'src/contexts/offset';

function MyApp({ Component, pageProps }: AppProps) {
  /* Add fonts variables to all pages */
  return (
    <ViewportProvider>
      <OffsetProvider>
        <div
          className={`${primary.variable} ${secondary.variable} app-wrapper`}
        >
          <ExampleNavbar />
          <Component {...pageProps} />
        </div>
      </OffsetProvider>
    </ViewportProvider>
  );
}

export default MyApp;
