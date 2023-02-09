import React from 'react';
import { IIconNames } from './../icons/interface';

type ColorScheme =
  | 'primary-bg-text-white'
  | 'secondary-bg-text-white'
  | 'black-bg-text-white'
  | 'white-bg-text-black';

type Size = 'lg' | 'md' | 'sm' | 'xs';

export interface IButton {
  title: string;
  colorScheme: ColorScheme;
  size: Size;
  clickHandler: (
    e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
  ) => void;
  'data-testid': string;
  hoverColorScheme?: ColorScheme;
  iconName?: IIconNames;
  iconIsLeft?: boolean;
  shiftIconOnHover?: boolean;
  isDisabled?: boolean;
}

export interface IRedirectButton
  extends Omit<IButton, 'clickHandler' | 'isDisabled'> {
  href: string;
  isOpenNewTab: boolean;
}
