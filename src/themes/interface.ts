/**
 * WARNING: If you make changes to the breakpoints then,
 * please update the 'screens' in tailwind.config.
 */

const keys = ['sm', 'md', 'lg', 'xl', '2xl'] as const;

export type Breakpoint = (typeof keys)[number];

// export type IBreakpoints = {
//   [key: Breakpoint]: number;
// };

export type IBreakpoints = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1400,
};
