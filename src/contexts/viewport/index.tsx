import React, { createContext, useContext } from 'react';
import { ILayoutDimension, useViewport } from 'src/hooks/viewport';

const contextDefaultValues: ILayoutDimension = {
  container: '2xl',
  width: 0,
  height: 0,
};

export const ViewportContext =
  createContext<ILayoutDimension>(contextDefaultValues);

interface IViewportProvider {
  children: React.ReactNode;
}

export default function ViewportProvider({ children }: IViewportProvider) {
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
