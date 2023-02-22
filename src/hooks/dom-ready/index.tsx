import { useState, useEffect } from 'react';

/**
 * This is hook is used when we want to render a component only after dom is ready.
 * This hook is so far only used in our Swiper root component. This solves the react
 * hydration issue that Swiper causes with SSR.
 * @see https://nextjs.org/docs/messages/react-hydration-error
 * @returns boolean
 */
export const useIsDomReady = () => {
  const [isDomReady, setIsDomReady] = useState<boolean>(false);

  useEffect(() => {
    setIsDomReady(true);
  }, []);

  return isDomReady;
};
