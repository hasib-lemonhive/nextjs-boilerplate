import type { AppProps } from 'next/app';
import ExampleNavbar from 'src/layout/nav-bar';
import { primary, secondary } from 'fonts';
import 'styles/globals.css';
import ViewportProvider from 'src/contexts/viewport';
import OffsetProvider from 'src/contexts/offset';
import IsDomReadyProvider from 'src/contexts/dom-ready';

// TODO: Need check all context api implementation
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IsDomReadyProvider>
      <ViewportProvider>
        <OffsetProvider>
          {/* Make font variables avaiable to all pages. */}
          <div
            className={`${primary.variable} ${secondary.variable} app-wrapper`}
          >
            <ExampleNavbar />
            <Component {...pageProps} />
          </div>
        </OffsetProvider>
      </ViewportProvider>
    </IsDomReadyProvider>
  );
}

export default MyApp;
