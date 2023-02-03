import { ILinkWrapper } from './interface';

export const linkArgs: ILinkWrapper[] = [
  {
    href: 'https://www.google.com',
    openNewTab: true,
    children: <p>Test</p>,
  },
  {
    href: 'https://www.bing.com',
    openNewTab: true,
    children: <p>Test</p>,
  },
  {
    href: 'https://www.google.com',
    openNewTab: false,
    children: <p>Test</p>,
  },
];
