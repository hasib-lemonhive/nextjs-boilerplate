import { createContext, useContext, useEffect, useState } from 'react';
import { IProviderProps } from '../types/interface';

const contextDefaultValue: boolean = false;

const DomReadyContext = createContext<Boolean>(contextDefaultValue);

export default function IsDomReadyProvider({ children }: IProviderProps) {
  const [isDomReady, setIsDomReady] = useState<boolean>(false);

  useEffect(() => {
    setIsDomReady(true);
  }, []);

  return (
    <DomReadyContext.Provider value={isDomReady}>
      {children}
    </DomReadyContext.Provider>
  );
}

export const useIsDomReady = () => {
  const isDomReady = useContext(DomReadyContext);
  return isDomReady;
};
