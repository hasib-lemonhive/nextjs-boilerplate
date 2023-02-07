/**
 * Remeber to add these fonts in tailwind config and _app.js.
 */

import { Roboto, Inter } from '@next/font/google';

export const primary = Roboto({
  subsets: ['latin'],
  variable: '--font-primary',
  weight: ['400', '500', '700'],
});

export const secondary = Inter({
  subsets: ['latin'],
  variable: '--font-secondary',
});
