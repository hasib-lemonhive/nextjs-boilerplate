import React, { createContext, useContext } from 'react';
import { ILayoutDimension, useViewport } from 'src/hooks/viewport';
import { IProviderProps } from '../common/interface';

const contextDefaultValues: ILayoutDimension = {
  container: '2xl',
  width: 0,
  height: 0,
};

const ViewportContext = createContext<ILayoutDimension>(contextDefaultValues);

export default function ViewportProvider({ children }: IProviderProps) {
  const { container, width, height } = useViewport();
  return (
    <ViewportContext.Provider
      value={{
        container,
        width,
        height,
      }}
    >
      {children}
    </ViewportContext.Provider>
  );
}

export const ViewportContextValue = () => {
  const { container, width, height } = useContext(ViewportContext);
  return { container, width, height };
};
