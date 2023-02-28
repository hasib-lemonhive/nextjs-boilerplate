/**
 * WARNING: If you make changes to the keys array/BREAKPOINTS object then,
 * please update the 'screens' in tailwind.config.
 */
const keys = ['sm', 'md', 'lg', 'xl', '2xl'] as const;

export type Breakpoint = (typeof keys)[number];

export type IBreakpoints = {
  [key in Breakpoint]: number;
};

export const BREAKPOINTS: IBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1400,
};
