export const If = ({ condition, children, else: elseChildren }) =>
  condition ? children : elseChildren || null;
