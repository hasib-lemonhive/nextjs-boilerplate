/**
 * This is necessary to make tailwind work in storybook
 */
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';

import '../styles/globals.css';
import { useEffect } from 'react';
import { SetTheme } from '../src/components/nav-bar/utils';
import { roboto, inter } from '../fonts';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

const withThemeProvider = (Story, context) => {
  const { theme } = context.globals;

  useEffect(() => {
    SetTheme(theme);
  }, [theme]);

  return (
    <div
      className={`text-black dark:text-slate-200 transition-colors ease-in ${roboto.variable} ${inter.variable}`}
    >
      <Story />
    </div>
  );
};

export const decorators = [withThemeProvider];
