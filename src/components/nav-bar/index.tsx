import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { INavigationBar, ThemeValues } from './interface';
import { SetTheme } from './utils';

function ExampleNavbar({ testId }: INavigationBar) {
  const [activeTheme, setActiveTheme] = useState<ThemeValues>(undefined);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      SetTheme('dark');
      setActiveTheme('dark');
    } else {
      SetTheme('light');
      setActiveTheme('light');
    }
  }, []);

  return (
    <nav
      data-testid={testId || null}
      className="fixed flex items-center justify-end flex-wrap py-4 w-11/12"
    >
      <button
        className="text-5xl"
        onClick={() => {
          if (activeTheme == 'dark') {
            SetTheme('light');
            setActiveTheme('light');
          } else {
            SetTheme('dark');
            setActiveTheme('dark');
          }
        }}
      >
        {activeTheme == 'dark' ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </nav>
  );
}

export default ExampleNavbar;
