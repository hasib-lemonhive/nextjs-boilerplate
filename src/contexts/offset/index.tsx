import { CONTAINERS } from '@root/src/themes/interface';
import { CONTAINER_DEFAULT_PADDING } from '@root/src/themes/layout';
import { createContext, useContext, useMemo } from 'react';
import { IProviderProps } from '../types/interface';
import { useViewport } from '../viewport';

export type OffsetType = number | string;

const defaultOffsetValue: OffsetType = 0;

const OffsetContext = createContext<OffsetType>(defaultOffsetValue);

export default function OffsetProvider({ children }: IProviderProps) {
  const { width, container } = useViewport();
  const containerOffset = useMemo(
    () => (width - CONTAINERS[container]) / 2,
    [container, width]
  );
  const offset: number | string =
    containerOffset > 0
      ? containerOffset + CONTAINER_DEFAULT_PADDING
      : `${CONTAINER_DEFAULT_PADDING}px`;

  return (
    <OffsetContext.Provider value={offset}>{children}</OffsetContext.Provider>
  );
}

export const useOffset = () => {
  const offset = useContext(OffsetContext);
  return offset;
};
