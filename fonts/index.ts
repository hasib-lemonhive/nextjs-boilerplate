/**
 * Remeber to add these fonts in tailwind config and _app.js.
 */

import { Roboto_Mono, Inter } from '@next/font/google';

export const roboto = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
