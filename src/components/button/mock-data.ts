import { IButton, IRedirectButton } from './interface';

export const buttonProps: IButton = {
  title: 'Button',
  colorScheme: 'primary-bg-text-white',
  hoverColorScheme: 'black-bg-text-white',
  size: 'lg',
  clickHandler: () => {},
  'data-testid': 'button',
  // iconName: 'arrow-right',
  shiftIconOnHover: true,
};

export const redirectButtonProps: IRedirectButton = {
  href: 'https://www.google.com/',
  isOpenNewTab: true,
  title: 'Redirect Button',
  colorScheme: 'primary-bg-text-white',
  hoverColorScheme: 'black-bg-text-white',
  size: 'lg',
  'data-testid': 'redirect-button',
};
