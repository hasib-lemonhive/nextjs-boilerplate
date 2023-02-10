import React from 'react';
import { IconNames } from './../icons/interface';

// TODO: Implement Outline buttons

export const buttonColorSchemes = [
  'primary-bg-text-white',
  'secondary-bg-text-white',
  'black-bg-text-white',
  'white-bg-text-black',
] as const;
type ColorScheme = (typeof buttonColorSchemes)[number];

export const buttonSizes = ['lg', 'md', 'sm', 'xs'] as const;
type Size = (typeof buttonSizes)[number];

export interface IButton {
  label: string;
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
