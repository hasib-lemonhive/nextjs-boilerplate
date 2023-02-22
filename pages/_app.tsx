import type { AppProps } from 'next/app';
import ExampleNavbar from 'src/layout/nav-bar';
import { primary, secondary } from 'fonts';
import 'styles/globals.css';
import ViewportProvider from 'src/contexts/viewport';
import OffsetProvider from 'src/contexts/offset';
import DomReadyProvider from 'src/contexts/dom-ready';

function MyApp({ Component, pageProps }: AppProps) {
  /* Add fonts variables to all pages */
  return (
    <DomReadyProvider>
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
    </DomReadyProvider>
  );
}

export default MyApp;
