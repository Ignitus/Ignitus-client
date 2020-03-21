export const breakpoints: number[] = [576, 768, 992, 1200];
export const mq: string[] = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`,
);
