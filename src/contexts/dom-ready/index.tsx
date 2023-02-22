import { createContext, useContext } from 'react';
import { useIsDomReady } from 'src/hooks/dom-ready';

const contextDefaultValue: boolean = false;

const DomReadyContext = createContext<Boolean>(contextDefaultValue);

interface IOffsetProvider {
  children: React.ReactNode;
}
export default function DomReadyProvider({ children }: IOffsetProvider) {
  const isDomReady = useIsDomReady();
  return (
    <>
      <DomReadyContext.Provider value={isDomReady}>
        {children}
      </DomReadyContext.Provider>
    </>
  );
}

export const DomReadyContextValue = () => {
  const isDomReady = useContext(DomReadyContext);
  return isDomReady;
};
