# 🧭 Homework – Routing in React

## 📝 Task

Build a small multi-page React app using **React Router v6**.

Your app should contain the following pages:

1. **Home Page** (`/`)
   - Welcome message and simple navigation.
2. **About Page** (`/about`)
   - A short description of your app or yourself.
3. **Users Page** (`/users`)
   - A list of user names (hardcoded is fine).
   - Each name should link to a dynamic route like `/users/paolo`.
4. **User Detail Page** (`/users/:username`)
   - Display the selected username from the URL.
5. **404 Page**
   - Show a "Not Found" message for all unmatched routes.

## 🧱 Requirements

- Use `react-router-dom` v6.
- Use a navigation menu with `<Link>` or `<NavLink>`.
- Use `useParams()` to retrieve the username in the dynamic route.
- Add a 404 handler with a wildcard route (`*`).
- Optional: Style your app using any method you prefer.

## 🚀 Bonus (Optional)

- Add a nested route: `/users/:username/details` with additional info.
- Add redirects or default routes if you feel comfortable.

## 📦 Folder Structure Suggestion

/src
├── App.js
├── pages/
│ ├── Home.js
│ ├── About.js
│ ├── Users.js
│ ├── UserDetail.js
│ └── NotFound.js
└── components/
└── Navbar.js