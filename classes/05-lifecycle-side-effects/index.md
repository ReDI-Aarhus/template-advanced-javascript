# 📘 Class 05 – Lifecycle and Side Effects in React

## 🎯 Objectives

* Understand the concept of a component's **lifecycle** in React.
* Learn how to use the **`useEffect`** hook to manage side effects.
* Practice integrating effects like timers, API calls, and subscriptions.

---

## 🧠 Topics Covered

* What is a component lifecycle?
* Side effects in React: what they are and why they matter
* The `useEffect` hook: syntax and usage
* Cleanup functions inside `useEffect`
* Common patterns and gotchas with effects

---

## 🛠️ In-Class Activities

* Build a **Timer** or **Countdown** component using `useEffect`
* Create a **Window Resizer Listener** that cleans up after itself
* Fetch data from an API and render it in a component
* Explore what happens when effects depend on props/state

---

## 🧩 Suggested Components

* `TimerDisplay` with `setInterval` and cleanup
* `FetchUserData` that loads mock data on mount
* `ResizeWatcher` that tracks and displays window size

---

## 🧐 Questions to Discuss

* What problems can occur if you forget to clean up an effect?
* How does `useEffect` compare to `componentDidMount` / `componentDidUpdate`?
* When should you use multiple `useEffect` calls in one component?
* How can dependency arrays help or hurt?

---

## 📚 Resources

* [React Docs – useEffect](https://react.dev/reference/react/useEffect)
* [React Docs – Rules of Hooks](https://react.dev/reference/react/hooks#rules-of-hooks)
* [Kent C. Dodds on Effects](https://kentcdodds.com/blog/useeffect-dependencies)

---

## 📌 Homework

See the [homework folder](./homework/homework.md) for this week’s assignment focused on implementing `useEffect` for timing, data fetching, and more.
