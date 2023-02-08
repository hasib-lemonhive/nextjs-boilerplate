import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { ThemeValues } from './interface';
import { SetTheme } from './utils';

function ExampleNavbar() {
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
    <nav className="fixed flex items-center justify-end flex-wrap py-4 w-11/12">
      <button
        className="text-4xl"
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
        {activeTheme == 'dark' ? (
          <span className="text-white">
            <MdLightMode />
          </span>
        ) : (
          <span className="text-black">
            <MdDarkMode />
          </span>
        )}
      </button>
    </nav>
  );
}

export default ExampleNavbar;
