import { useMemo } from 'react';
import { breakpoints } from '/workspace/tailwind.breakpoints';
import { containerDefaultPadding } from 'src/themes/layout';
import { ViewportContextValue } from 'src/contexts/viewport';

export type OffsetType = number | string | null;

/**
 * This hook is used to calculate the left and right padding of the swiper container,
 * if we want to align the swiper slide to the container heading. Currently can't be done
 * through default swiper options.
 *
 * TODO: We need to test if changing the container padding in tailwind config causes this offset
 * hook to break. We will need a section with a header and Swiper for this.
 * @returns number | string | null
 */
export const useOffset = (): OffsetType => {
  const { width, container } = ViewportContextValue();
  const containerOffset = useMemo(
    () => (width - Number(breakpoints[container])) / 2,
    [container, width]
  );
  const offset: number | string =
    containerOffset > 0
      ? containerOffset + (containerDefaultPadding / 2) * 16
      : `${containerDefaultPadding}rem`;
  return offset;
};
