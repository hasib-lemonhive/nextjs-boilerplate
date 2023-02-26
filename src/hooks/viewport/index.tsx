import { useState, useEffect } from 'react';
import { breakpoints } from '@root/tailwind.breakpoints';
import { getWindow } from 'ssr-window';
import { Breakpoints } from '@root/src/themes/interface';

// ILayoutDimension
export interface ILayoutDimension {
  container: Breakpoints;
  width: number;
  height: number;
}

// getContainer
const getContainer = (width: number): Breakpoints => {
  if (width >= Number(breakpoints['2xl'])) return '2xl';
  if (width >= Number(breakpoints.xl)) return 'xl';
  if (width >= Number(breakpoints.lg)) return 'lg';
  if (width >= Number(breakpoints.md)) return 'md';
  if (width >= Number(breakpoints.sm)) return 'sm';
  return 'sm';
};

// getWindowDimensions
const getWindowDimensions = (): Omit<ILayoutDimension, 'container'> => {
  const { innerWidth: width, innerHeight: height } = getWindow();
  return { width, height };
};

/**
 * This hook is used in the useOffset hook and in Swiper.
 * This is useful to dynamically allocate how many items should be visible
 * in the swiper slide as the viewport changes.
 *
 * TODO: This hook needs to be updated as it causes two listeners to be activated
 * everytime a Swiper is called. Once for offset and once of swiper. Our pages can have
 * multiple swipers which would result in a lot of listeners.
 * @returns {object} container, width, height
 */

export const useViewport = (): ILayoutDimension => {
  const { width, height } = getWindowDimensions();
  const [container, setContainer] = useState(getContainer(width));
  const [windowDimensions, setWindowDimensions] = useState({ width, height });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize(): void {
      const { width: updatedWidth, height: updatedHeight } =
        getWindowDimensions();
      setWindowDimensions({ width: updatedWidth, height: updatedHeight });
      setContainer(getContainer(updatedWidth));
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return { container, ...windowDimensions };
};
