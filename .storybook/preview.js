/**
 * This is necessary to make tailwind work in storybook
 */
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';

import '../styles/globals.css';
import { useEffect } from 'react';
import { SetTheme } from '../src/sections/nav-bar/utils';
import { primary, secondary } from 'fonts';

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
    <div className={`${primary.variable} ${secondary.variable} app-wrapper`}>
      <Story />
    </div>
  );
};

export const decorators = [withThemeProvider];
