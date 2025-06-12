# 🏠 Homework – Fetch API Practice

## 🎯 Objective

Get comfortable making asynchronous requests using the `fetch` API and working with JSON data in a React component.

## 📝 Task

Build a simple React app that:

1. Fetches and displays a list of users from the following public API:  
   👉 `https://jsonplaceholder.typicode.com/users`
2. Displays the following info for each user:
   - Name
   - Email
   - City
3. Shows a loading message while the data is being fetched.
4. Shows an error message if the request fails.

### 🔧 Bonus

- Add a search input to filter users by name.
- Show a message if no users match the search.

## 📁 Suggested Structure

You can create a component called `UserList` to manage the fetching and rendering of users.

## ✅ Checklist

- [ ] Use `useEffect` to trigger the fetch when the component loads.
- [ ] Use `useState` to manage loading, error, and data.
- [ ] Format the UI in a readable way (table or list is fine).
