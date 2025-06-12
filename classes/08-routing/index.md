# 🧭 Class 08 – Routing in React

## 🎯 Goals

- Understand the concept of routing in single-page applications (SPAs)
- Learn how to implement routing using React Router
- Build navigation between multiple pages
- Understand how to use dynamic route parameters and nested routes

---

## 📚 Topics Covered

### 🚦 Why Routing?

- SPAs and navigation without full page reloads
- Client-side routing vs server-side routing

### 🧱 React Router Basics

- Installing `react-router-dom`
- `<BrowserRouter>` and the routing context
- `<Routes>` and `<Route>`
- `path` and `element` props
- Creating simple routes for components like `/about`, `/contact`, etc.

### 🔁 Navigation

- Using `<Link>` and `<NavLink>` to switch routes
- Styling active links

### 🧠 Dynamic Routing

- Using route parameters: `/user/:id`
- Accessing parameters with `useParams`

### 📥 Nested Routes

- Defining routes inside other routes
- Creating a layout component with nested pages

### 🧭 Redirection & 404s

- Handling unknown routes with a `NotFound` component
- Redirects with `Navigate`

---

## 💡 Example Project Structure

/src
├── App.js
├── pages/
│ ├── Home.js
│ ├── About.js
│ ├── Profile.js
│ └── NotFound.js
└── components/
└── Navbar.js


---

## 🧪 In-Class Exercises

- Add routing to a multi-page app
- Create a navigation menu using `<Link>`

---

## 🧠 Key Concepts

- Declarative routing
- Route matching order
- Param-based rendering
- How React Router affects component re-renders

---

## 🏠 Homework

Implement a small multi-page app (e.g., a blog or product listing) with navigation, dynamic routes, and a 404 page.  
See the [homework.md](./homework/homework.md) for full instructions.

---

Happy Routing! 🧭
