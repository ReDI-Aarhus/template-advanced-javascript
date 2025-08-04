export const For = ({ items, children }) => {
  const itemsArray = Array.isArray(items) ? items : [items];
  return itemsArray.map((item, index) => {
    const child = typeof children === 'function' ? children(item, index) : children;
    return child;
  });
}
// Usage example:
// <For items={[1, 2, 3]}>
//   {(item) => <div key={item}>{item}</div>}
// </For>
// or
// <For items={1}>
//   {(item) => <div key={item}>{item}</div>}
// </For>
// or
// <For items={1}>
//   <div>{item}</div>
// </For>
// or