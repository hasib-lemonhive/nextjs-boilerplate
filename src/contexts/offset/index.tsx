import { createContext, useContext } from 'react';
import { useOffset } from 'src/hooks/offset';

const defaultOffsetValue: number | string | null = 0;
// TODO: Need udpate type with useOffset hooks sync
const OffsetContext = createContext<number | string | null>(defaultOffsetValue);

interface IOffsetProvider {
  children: React.ReactNode;
}

export default function OffsetProvider({ children }: IOffsetProvider) {
  const offset = useOffset();
  return (
    <OffsetContext.Provider value={offset}>{children}</OffsetContext.Provider>
  );
}

export const OffsetContextValue = () => {
  const offset = useContext(OffsetContext);
  return offset;
};
