import { createContext, useContext } from 'react';
import { useIsDomReady } from 'src/hooks/dom-ready';
import { IProviderProps } from '../types/interface';

const contextDefaultValue: boolean = false;

const DomReadyContext = createContext<Boolean>(contextDefaultValue);

export default function DomReadyProvider({ children }: IProviderProps) {
  const isDomReady = useIsDomReady();
  return (
    <DomReadyContext.Provider value={isDomReady}>
      {children}
    </DomReadyContext.Provider>
  );
}

export const DomReadyContextValue = () => {
  const isDomReady = useContext(DomReadyContext);
  return isDomReady;
};
