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

export const outlineButtonColorSchemes = [
  'transparent-bg-text-primary',
  'transparent-bg-text-secondary',
  'transparent-bg-text-white',
  'transparent-bg-text-black',
] as const;
type OutlineColorScheme = (typeof outlineButtonColorSchemes)[number];

export const buttonVariants = ['fill', 'outline'] as const;
type Variants = (typeof buttonVariants)[number];

export const buttonSizes = ['lg', 'md', 'sm', 'xs'] as const;
type Size = (typeof buttonSizes)[number];

export interface IFillButton {
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
  variant: Variants;
}

export interface IFillRedirectButton
  extends Omit<IFillButton, 'clickHandler' | 'isDisabled'> {
  href: string;
  isOpenNewTab: boolean;
}

export interface IOutlineButton
  extends Omit<IFillButton, 'colorScheme' | 'hoverColorScheme'> {
  colorScheme: OutlineColorScheme;
  hoverColorScheme: OutlineColorScheme;
  // variant: 'outline';
}

export interface IOutlineRedirectButton
  extends Omit<IOutlineButton, 'clickHandler' | 'isDisabled'> {
  href: string;
  isOpenNewTab: boolean;
}

export type IBaseButton =
  | Omit<IOutlineButton, 'clickHandler'>
  | Omit<IFillButton, 'clickHandler'>;
