import { ReactNode } from 'react';

export interface ILinkWrapper {
  href: string;
  children: ReactNode;
  openNewTab: boolean;
}
