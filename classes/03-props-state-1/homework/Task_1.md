# 🏠 Homework – Four-Digit Counter Component

## 🎯 Objective

Build a **Four-Digit Counter** using **React**, applying your knowledge of:

- Props and state
- Component structure
- Conditional rendering
- Mapping data to components

---

## 🧩 Your Task

### 🔨 Build a React component that:

- Displays a number between `0000` and `9999`
- Breaks the number into **four digits**, displaying each in a separate component
- Allows users to increment and decrement the number with buttons
- Handles boundaries (`0000` is the minimum, `9999` is the maximum)

---

## 📦 Requirements

- Use React **functional components**
- Use **`useState`** for state management
- Create a separate `Digit` component that receives the current number and its digit place as props
- Apply some basic styling to make the output readable

---

## 👀 Example

When the number is `1423`, the app should render four digits: `1 4 2 3`, each coming from the `Digit` component.

```jsx
<Digit number={1423} place={1000} />
<Digit number={1423} place={100} />
<Digit number={1423} place={10} />
<Digit number={1423} place={1} />
```

--- 

## ✅ Bonus
- Add a button to reset the counter to 0000
- Highlight the most significant non-zero digit (e.g., 0235 → highlight 2)
- Add keyboard support (↑ to increment, ↓ to decrement)