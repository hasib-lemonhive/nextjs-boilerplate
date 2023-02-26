import { breakpoints } from '@root/tailwind.breakpoints';

const keys = Object.keys(breakpoints);

export type Breakpoints = (typeof keys)[number];

export type IBreakpoints = {
  [key: Breakpoints]: number;
};
