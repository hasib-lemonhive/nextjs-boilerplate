import React from 'react';
import { IIconNames } from './../icons/interface';

type IColorScheme =
  | 'primary-bg-text-white'
  | 'secondary-bg-text-white'
  | 'black-bg-text-white'
  | 'white-bg-text-black';

type Size = 'lg' | 'md' | 'sm' | 'xs' | '2xs';

export interface IButton {
  title: string;
  colorScheme: IColorScheme;
  hoverColorScheme?: IColorScheme;
  size: Size;
  iconName?: IIconNames;
  iconIsLeft?: boolean;
  clickHandler: (
    e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
  ) => void;
  'data-testid': string;
  shiftIconOnHover?: boolean;
  disabled?: boolean;
}

export interface IRedirectButton
  extends Omit<IButton, 'clickHandler' | 'disabled'> {
  href: string;
  isOpenNewTab: boolean;
}
