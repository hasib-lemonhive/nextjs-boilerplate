import {
  IFillButton,
  IFillRedirectButton,
  IOutlineButton,
  IOutlineRedirectButton,
} from './interface';

export const buttonProps: IFillButton = {
  label: 'Button',
  colorScheme: 'primary-bg-text-white',
  hoverColorScheme: 'secondary-bg-text-white',
  size: 'lg',
  clickHandler: () => {},
  'data-testid': 'button',
  iconName: 'arrow-right',
  shiftIconOnHover: true,
  variant: 'fill',
};

export const redirectButtonProps: IFillRedirectButton = {
  href: 'https://www.google.com/',
  isOpenNewTab: true,
  label: 'Redirect Button',
  colorScheme: 'primary-bg-text-white',
  hoverColorScheme: 'secondary-bg-text-white',
  size: 'lg',
  'data-testid': 'redirect-button',
  variant: 'fill',
};

export const outlineButtonProps: IOutlineButton = {
  label: 'Outline Button',
  colorScheme: 'transparent-bg-text-primary',
  hoverColorScheme: 'transparent-bg-text-primary',
  size: 'lg',
  clickHandler: () => {},
  'data-testid': 'redirect-button',
  variant: 'outline',
};

export const redirectOutlineButtonProps: IOutlineRedirectButton = {
  href: 'https://www.google.com/',
  isOpenNewTab: true,
  label: 'Redirect Button',
  colorScheme: 'transparent-bg-text-primary',
  hoverColorScheme: 'transparent-bg-text-primary',
  size: 'lg',
  'data-testid': 'redirect-button',
  variant: 'outline',
};
