# 🏠 Homework – Class 05: Lifecycle and useEffect

## 🎯 Objective

Build React components that demonstrate your understanding of the `useEffect` hook and how to manage side effects such as:

* Timers
* Event listeners
* Fetching data

---

## 🧩 Your Tasks

### ⏱️ 1. Timer Component

Create a component that:

* Starts counting seconds as soon as it mounts.
* Increments a counter every second.
* Has a "Stop" button to pause the timer.
* Cleans up the timer when the component unmounts.

### 🌐 2. Fetch User Data

Create a component that:

* Fetches user data from `https://jsonplaceholder.typicode.com/users` using `fetch()`.
* Displays a loading state while data is loading.
* Renders a list of users when the data has loaded.
* Handles and displays any errors from the request.

### 📏 3. Window Size Tracker

Create a component that:

* Displays the current `window.innerWidth` and `window.innerHeight`.
* Updates the displayed values when the window is resized.
* Properly removes the event listener when the component unmounts.

---

## 🧠 Questions to Think About

* What goes wrong if you forget to clean up an interval or event listener?
* What’s the difference between `useEffect(() => {}, [])` and `useEffect(() => {})`?
* Why do we include dependencies in the `useEffect` dependency array?


## 🧪 Bonus Challenge

Add a dropdown that lets the user pick how fast the timer should increment (1s, 0.5s, etc). Update the interval dynamically based on the selection.

---

## 📚 Resources

* [React Docs – useEffect](https://react.dev/reference/react/useEffect)
* [How to fetch data in React](https://react.dev/learn/synchronizing-with-effects#fetching-data)
