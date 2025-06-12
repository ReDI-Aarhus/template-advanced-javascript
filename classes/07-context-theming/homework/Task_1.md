# LAB 2 | Implementing a Theme Switcher in React with useContext

<summary>
<h2>Learning Goals</h2>
</summary>

<br>

Upon completion of this exercise, you will be able to:

- Understand and implement the React Context API.
- Use the `useContext` hook to manage and toggle themes in a React application.
- Integrate the theme switching functionality into an existing React application.

<br>
<hr>

## Introduction

In this exercise, we'll build on the movie listing application created in the previous lab by adding a theme switcher feature. This will allow users to toggle between a light and a dark theme for the entire application. We'll use the React Context API and `useContext` hook to manage and apply these themes dynamically.

## Instructions

### Iteration 1 | Create a Theme Context

First, we'll set up a context to manage the theme state throughout the application.

1. Create a new file `ThemeContext.jsx` in the `src/contexts` directory.
2. Create a new context using the `createContext()` function and export it.

```jsx
// src/contexts/ThemeContext.jsx
// ThemeContext.js
import { createContext } from 'react';

const ThemeContext = createContext();

export default ThemeContext;
```

<br>

### Iteration 2 | Integrate the Theme Provider

Wrap your application's component tree with the `ThemeContext.Provider` to provide theme context to all components.

1. Import `ThemeProvider` into `src/app.jsx`.
2. Wrap the `<App />` component with `<ThemeContext.Provider>`.

```jsx
// src/main.jsx
import './App.css'
import { useState } from 'react'
import MovieList from './MovieList'; // Make sure to import MovieList
import AddMovieForm from './AddMovieForm'; // Make sure to import AddMovieForm
import ThemeContext from './contexts/ThemeContext'

function App() {
  // Initialize the movies state with an array of movies
  const [movies, setMovies] = useState(['The Shawshank Redemption', 'The Godfather', 'The Dark Knight']);

  return (
    <>
      <ThemeContext.Provider value={{ color: theme }}>
        <div className="App">
          <header>
            <h1>My Movie List</h1>
          </header>
          <MovieList movies={movies} /> {/* Pass movies as a prop */}
          <AddMovieForm /> {/* Keep the AddMovieForm component for now */}
        </div>
      </ThemeContext.Provider>
    </>
  )
}
export default App
```

<br>


### Iteration 3 | Create a ThemeToggler Component

Now, let's create a component that will change the theme from light to dark and vice versa in the context.

1. Create a new simple component called `ThemeSwitcher()`
2. The component should take in a function `toggleTheme` as a prop and trigger it on click to change the theme.


```jsx
// ThemeSwitcher.js
function ThemeSwitcher(props) {
    return(
        <button onClick={props.toggleTheme}>
            Switch theme
        </button>
    )
}
export default ThemeSwitcher;
```

<br>

### Iteration 4 | Update App.jsx with the theme state and the function to change that state

Next is to actually initialise the theme state and teh function to switch that theme that will be passed down to the `ThemeSwitcher` component.

1. Initialise a state called `theme` and set it to `'light'` as default 
2. Write a function called `toggleTheme()` that uses the updaterFunction `setTheme()` from the state and toggles the state between `'dark'` and `'light'`


```jsx
import './App.css'
import { useState } from 'react'
import MovieList from './MovieList'; // Make sure to import MovieList
import AddMovieForm from './AddMovieForm'; // Make sure to import AddMovieForm
import ThemeContext from './contexts/ThemeContext'

function App() {
  // Initialize the movies state with an array of movies
  const [movies, setMovies] = useState(['The Shawshank Redemption', 'The Godfather', 'The Dark Knight']);

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <ThemeContext.Provider value={{ color: theme }}>
        <div className="App">
          <header>
            <h1>My Movie List</h1>
          </header>
          <MovieList movies={movies} /> {/* Pass movies as a prop */}
          <AddMovieForm /> {/* Keep the AddMovieForm component for now */}
        </div>
      </ThemeContext.Provider>
    </>
  )
}
export default App
```

<br>

### Iteration 5 | Use the ThemeSwitcher component

Import and use the `ThemeSwitcher` component in your app.

1. Import and render your `ThemeSwitcher` component somewhere in your app (Style it however you like!)
2. Pass down the `toggleTheme()` function to the `ThemeSwitcher` so that it can change the state using it


```jsx
import './App.css'
import { useState } from 'react'
import MovieList from './MovieList'; // Make sure to import MovieList
import AddMovieForm from './AddMovieForm'; // Make sure to import AddMovieForm
import ThemeContext from './contexts/ThemeContext'
import ThemeSwitcher from './components/ThemeSwicther' // Make sure to import ThemeSwitcher

function App() {
  // Initialize the movies state with an array of movies
  const [movies, setMovies] = useState(['The Shawshank Redemption', 'The Godfather', 'The Dark Knight']);

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <ThemeContext.Provider value={{ color: theme }}>
        <div className="App">
          <header>
            <h1>My Movie List</h1>
          </header>

          <ThemeSwitcher toggleTheme={toggleTheme}/>

          <MovieList movies={movies} /> {/* Pass movies as a prop */}
          <AddMovieForm /> {/* Keep the AddMovieForm component for now */}
        </div>
      </ThemeContext.Provider>
    </>
  )
}
export default App
```

<br>

### Iteration 6 | Use Theme Context in Components

Now, let's use the theme context in the `MovieList` component to apply the current theme dynamically.

1. Import `useContext` from React and `ThemeContext` in `App.jsx`.
2. Use `useContext` to access the current theme and toggle function.
3. Update the className of the top-level div in `App` to change according to the current theme.

```jsx
// src/MovieList.jsx
import ThemeContext from '../contexts/ThemeContext';


function MovieList({ movies }) { // Use destructuring to get movies from props
  const myThemeData = useContext(ThemeContext);

  return (
    <ul className={`movie-list ${myThemeData.color}`}>
      {movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
  );
}

export default MovieList;
```

<br>

### Iteration 7 | Styling for Themes

Update your `App.css` to reflect different styles for light and dark themes.
Style it with the class you just added in the previous iteration!

```css
/* src/App.css */
.movie-list.light {
  background-color: #fff;
  color: #333;
}

.movie-list.dark {
  background-color: #333;
  color: #fff;
}

/* Add additional theme-specific styles here */
```

<br>

### Final Step | Run and Review

Make sure all components are correctly imported and rendered within the context of the `ThemeContext.Provider`. Run your React app using Vite (`npm run dev`), and you should see your movie listing page equipped with a theme switcher button.

By testing the button, you can switch between the light and dark themes, observing how the context controls the styling across your application.

**Happy Coding!** :heart:

<br>
