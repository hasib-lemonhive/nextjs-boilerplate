import React from 'react';
import { IconNames } from './../icons/interface';

// type ColorScheme =
//   | 'primary-bg-text-white'
//   | 'secondary-bg-text-white'
//   | 'black-bg-text-white'
//   | 'white-bg-text-black';
export const buttonColorSchemes = {
  primaryBgTextWhite: 'primary-bg-text-white',
  secondaryBgTextWhite: 'secondary-bg-text-white',
  blackBgTextWhite: 'black-bg-text-white',
  whiteBgTextBlack: 'white-bg-text-black',
} as const;
type colorSchemeKeys = keyof typeof buttonColorSchemes;
type ColorScheme = (typeof buttonColorSchemes)[colorSchemeKeys];

// type Size = 'lg' | 'md' | 'sm' | 'xs';
export const buttonSizes = {
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs',
} as const;
type sizeKeys = keyof typeof buttonSizes;
type Size = (typeof buttonSizes)[sizeKeys];

export interface IButton {
  title: string;
  colorScheme: ColorScheme;
  size: Size;
  clickHandler: (
    e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
  ) => void;
  'data-testid': string;
  hoverColorScheme?: ColorScheme;
  iconName?: IconNames;
  iconIsLeft?: boolean;
  shiftIconOnHover?: boolean;
  isDisabled?: boolean;
}

export interface IRedirectButton
  extends Omit<IButton, 'clickHandler' | 'isDisabled'> {
  href: string;
  isOpenNewTab: boolean;
}
