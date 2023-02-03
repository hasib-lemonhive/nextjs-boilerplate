import { ThemeValues } from './interface';

export function SetTheme(theme: Omit<ThemeValues, 'undefined'>) {
  if (theme == 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
