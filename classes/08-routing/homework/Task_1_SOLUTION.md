```js
// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:username" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

---



```js
// components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav>
    <NavLink to="/">Home</NavLink> |{" "}
    <NavLink to="/about">About</NavLink> |{" "}
    <NavLink to="/users">Users</NavLink>
  </nav>
);

export default Navbar;
```

---

```js
// pages/Home.js
import React from "react";

const Home = () => <h1>Welcome to the Routing Demo App</h1>;

export default Home;
```

---

```js
// pages/About.js
import React from "react";

const About = () => <p>This app demonstrates basic routing in React.</p>;

export default About;
```

---


```js
// pages/Users.js
import React from "react";
import { Link } from "react-router-dom";

const users = ["paolo", "lena", "maria"];

const Users = () => (
  <>
    <h2>User List</h2>
    <ul>
      {users.map((user) => (
        <li key={user}>
          <Link to={`/users/${user}`}>{user}</Link>
        </li>
      ))}
    </ul>
  </>
);

export default Users;
```

---


```js
// pages/UserDetail.js
import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { username } = useParams();
  return <h2>Welcome, {username}!</h2>;
};

export default UserDetail;

```

---

```js
// pages/NotFound.js
import React from "react";

const NotFound = () => <h2>404 - Page Not Found</h2>;

export default NotFound;

```