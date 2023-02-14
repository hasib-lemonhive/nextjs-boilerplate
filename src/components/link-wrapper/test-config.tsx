import { ILinkWrapper } from './interface';

export const linkArgs: ILinkWrapper[] = [
  {
    href: 'https://www.google.com',
    isOpenNewTab: true,
    children: <p>Test</p>,
    isStyled: true,
  },
  {
    href: 'https://www.bing.com',
    isOpenNewTab: true,
    children: <p>Test</p>,
    isStyled: false,
  },
  {
    href: 'https://www.google.com',
    isOpenNewTab: false,
    children: <p>Test</p>,
    isStyled: true,
  },
];
