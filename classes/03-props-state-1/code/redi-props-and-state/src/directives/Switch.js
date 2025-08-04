import React from "react";

export const Switch = ({ condition, children }) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  const matchedChild = childrenArray.find((child) => {
    if (typeof child !== "object" || !child) return false;
    if (typeof child.type !== "function") return false;
    if (child.type !== Case && child.type !== Default) return false;
    if (!React.isValidElement(child)) return false;
    if (child.type === Default) return true; // Default case always matches

    return child.props && child.props.condition === condition;
  });

  return matchedChild || null;
};

// Usage example:
// <Switch condition={condition}>
//   <Case condition="case1">Case 1</Case>
//   <Case condition="case2">Case 2</Case>
//   <Default>Default Case</Default>
// </Switch>

export const Case = ({ condition, children }) => {
  return children;
};

export const Default = ({ children }) => {
  return children;
};
