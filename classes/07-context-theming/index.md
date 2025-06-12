# 🧠 Class 07 – Context API & Theming in React

In this class, we’ll explore **how React applications can share data across components** without having to pass props manually at every level. We’ll also look at **how themes** (like light/dark mode) can be implemented using context.

---

## 🎯 Learning Objectives

By the end of this class, you should be able to:

- Understand what the Context API is and when to use it
- Create and provide a context to components
- Consume context using `useContext`
- Implement a basic theme switcher using context
- Understand how to avoid "prop drilling"

---

## 📚 Topics Covered

### 🌐 What is the Context API?

- Solving prop drilling
- Global vs local state
- Structure of `React.createContext()`, `Provider`, and `useContext`

### 🧰 How to Use Context

- Creating a context file
- Wrapping your app with the context `Provider`
- Using `useContext` to access the value

### 🎨 Theming with Context

- Define a theme object (e.g., light and dark mode)
- Create a toggle function in the context
- Apply dynamic styles based on the theme

---

## 💻 In-Class Exercise

1. Create a simple counter app that uses context to share and update state.
2. Implement a theme toggle (light/dark) using the Context API.
3. Wrap your `App` component with the context `Provider`.

---

## 📦 Examples

- `ThemeContext.js`: Provides theme data and a toggle function.
- `CounterContext.js`: Shares counter state and logic.
- Components that consume those contexts to style or display data.

---

## 🧠 Key Takeaways

- Context helps you share state without passing props manually.
- It’s a powerful tool but should be used when really needed.
- Perfect for themes, language settings, authentication, etc.
- Combine with custom hooks for clean code structure.

---

## 📌 Homework

Check the `homework/` folder for a task to build a themed app using context.

---

If you’re curious, read more on the [official React docs for Context](https://reactjs.org/docs/context.html).

