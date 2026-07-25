export const routes = {
  home: '/',
} as const;

export type Routes = (typeof routes)[keyof typeof routes];