import { breakpoints } from '@root/tailwind.breakpoints';

const keys = Object.keys(breakpoints);
// const keys = ['sm', 'md', 'lg', 'xl', '2xl'] as const;

export type Breakpoint = (typeof keys)[number];

export type IBreakpoints = {
  [key: Breakpoint]: number;
};
