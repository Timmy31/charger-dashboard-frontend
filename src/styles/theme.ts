export const breakpoints = {
  xs: "350px",
  s: "375px",
  m: "768px",
  l: "1024px",
  xl: "1440px",
};

export type Breakpoints = keyof typeof breakpoints;

export type Theme = typeof theme;

const theme = {
  colors: {
    alert: "red",
    default: "white",
    primary: "#214fb2",
    secondary: "black",
    success: "#20CB9A",
  },
  viewport: {
    xs: `(min-width: ${breakpoints.xs})`,
    s: `(min-width: ${breakpoints.s})`,
    m: `(min-width: ${breakpoints.m})`,
    l: `(min-width: ${breakpoints.l})`,
    xl: `(min-width: ${breakpoints.xl})`,
  },
  breakpoints,
  content: `	
		max-width: ${breakpoints.xl};
		margin-left: auto;
		margin-right: auto;`,
};

export default theme;
