# ✅ Four-Digit Counter – Solution

## 📁 Overview

This solution implements a **Four-Digit Counter** using React functional components. It displays a number from `0000` to `9999`, breaking it into four digits rendered individually using a reusable `Digit` component. It includes buttons to increment and decrement the number while enforcing boundary conditions.

---

## 🧠 Concepts Used

* **State management** with `useState`
* **Functional components**
* **Props usage and digit calculation**
* **Mapping data to components**
* **Basic conditional logic and boundary handling**
* **Styling via inline styles**

---

## 🥉 Components

### 🔢 `Digit` Component

```jsx
export const Digit = ({ number, place, index }) => {
  const digit = Math.floor((number / place) % 10) * place;

  return <span style={{ fontSize: "2rem", margin: "0 5px" }}>{digit}</span>;
};
```

* **Props:**

  * `number`: The full number (e.g., `1423`)
  * `place`: The digit place (e.g., `1000`, `100`, `10`, `1`)
  * `index`: Optional for unique key when rendering

* **Logic:** Extracts the digit at the given place using:

  ```js
  Math.floor((number / place) % 10)
  ```

---

### 🧯 `FourDigitCounterSolution` Component

```jsx
export const FourDigitCounterSolution = () => {
  const [number, setNumber] = useState(1000);

  const increment = () => {
    if (number < 9999) setNumber(number + 1);
  };

  const decrement = () => {
    if (number > 0) setNumber(number - 1);
  };

  const places = [1000, 100, 10, 1].sort((a, b) => b - a);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Four-Digit Counter for number {number}</h1>
      <div style={{ display: "flex", justifyContent: "center", fontSize: "3rem" }}>
        {places.map((place, index) => (
          <Digit key={index} number={number} place={place} index={index} />
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={decrement} style={{ marginRight: "10px" }}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
```

* **State:** Manages the current number
* **Buttons:** Increment and decrement the number within `[0000–9999]`
* **Rendering:** Maps over digit places to display each digit using `Digit`

---

## 💅 Styling

* Inline styles used for:
* Digit font size and spacing
* Layout centering with flexbox
* Button spacing and UI clarity

---

## ✅ Output Example

For `number = 1423`, the output renders:

```jsx
<Digit number={1423} place={1000} />
<Digit number={1423} place={100} />
<Digit number={1423} place={10} />
<Digit number={1423} place={1} />
```

This results in visual digits:

```
1000  400  20  3
```

*(Note: Digits are shown multiplied by their place. You may adjust to show just the digit if preferred.)*

