# 📦 Class 09 – Fetch API & Data Fetching in React

## 🎯 Learning Objectives

By the end of this class, you should be able to:

- Understand what the Fetch API is and how it works.
- Use `fetch()` to retrieve data from an API.
- Manage asynchronous data loading in React.
- Handle loading and error states gracefully.
- Understand JSON responses and how to use them in components.

---

## 🧠 Topics Covered

### 🌐 What is the Fetch API?

- Native JavaScript interface for HTTP requests
- Uses Promises and async/await
- Example:

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

### 🔁 Promises and `async/await`

- Review of asynchronous code
- How to write clean fetch logic with `async/await`

### 🧱 Building a Simple Data App

- Create a component that fetches and displays a list of posts
- Discuss side effects and `useEffect()`
- Best practices for calling APIs in React

### 🚨 Handling Edge Cases

- Displaying a loading spinner while data is fetched
- Showing an error message on failure
- Empty states or fallback UIs

### 🧪 Example API

- https://jsonplaceholder.typicode.com
- Example endpoints:
  - `/posts`
  - `/users`
  - `/todos`

---

## 💬 Class Activities

- Code walkthrough: Basic API fetch with `.then()` vs `async/await`
- Build a simple post viewer in React
- Discuss strategies for managing asynchronous data

---

## 🤩 Homework

Check the `homework/` folder for your task and starter files.

---

## 📚 Extra Resources

- [MDN – Fetch API Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [React Docs – useEffect](https://reactjs.org/docs/hooks-effect.html)
- [Async/Await on JavaScript.info](https://javascript.info/async-await)

---

_This class sets the foundation for connecting React apps to real-world APIs. Be sure to experiment and explore!_ 🚀
