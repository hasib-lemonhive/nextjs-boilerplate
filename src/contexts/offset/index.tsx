import { createContext, useContext } from 'react';
import { OffsetType, useOffset } from 'src/hooks/offset';
import { IProviderProps } from '../common/interface';

const defaultOffsetValue: OffsetType = 0;

const OffsetContext = createContext<OffsetType>(defaultOffsetValue);

export default function OffsetProvider({ children }: IProviderProps) {
  const offset = useOffset();
  return (
    <OffsetContext.Provider value={offset}>{children}</OffsetContext.Provider>
  );
}

export const OffsetContextValue = () => {
  const offset = useContext(OffsetContext);
  return offset;
};
