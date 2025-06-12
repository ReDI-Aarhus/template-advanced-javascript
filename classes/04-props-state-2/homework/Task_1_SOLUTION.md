<summary>
<h2>Learning Goals</h2>
</summary>

<br>

Upon completion of this exercise, you will be able to:

- Set up a new React app using Vite and run it in development mode.
- Create and render React function components.
- Use JSX to render lists and forms within a React component.
- Use Props and State to render your list

<br>
<hr>

## Introduction

In this exercise, we will practice creating a basic movie listing page with a form to add a new movie. This exercise focuses on setting up the project, creating components, and rendering lists and forms without implementing any logic for adding movies yet.

## Instructions

### Iteration 1 | Create React App with Vite

First, let's start by creating a new React project using Vite.

1. Open your terminal.
2. Navigate to the directory where you want to create your project.
3. Run the command `npx create-vite@latest my-movie-app --template react` to create a new React project named `my-movie-app`.
4. Once the project is created, navigate to its directory by running `cd my-movie-app`.
5. Run `npm install` to install dependencies.
6. Start the development server by running `npm run dev`. Your new React app should now be running in development mode and accessible in the browser.

You can reference the Vite documentation here: [Vite.js - Getting Started](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

<br>

### Iteration 2 | Prepare the App Component

Let's clean up the `src/App.jsx` file a bit. Replace the content with the following structure:

```jsx
// src/App.jsx
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Movie List</h1>
      </header>
      {/* MovieList and AddMovieForm components will go here */}
    </div>
  );
}

export default App;
```

<br>

### Iteration 3 | Create the MovieList Component

Create a new file `MovieList.jsx` in the `src` directory. This component will display a list of movies. For now, you can use a static array of movie titles to render the list.

```jsx
// src/MovieList.jsx
function MovieList() {
  const movies = ['The Shawshank Redemption', 'The Godfather', 'The Dark Knight'];

  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
  );
}

export default MovieList;
```

Don't forget to import and render `MovieList` in your `App` component.

<br>

### Iteration 4 | Create the AddMovieForm Component

Create another new file `AddMovieForm.jsx` in the `src` directory. This component will render a form where users can type in a movie name but won't handle form submission yet.

```jsx
// src/AddMovieForm.jsx
function AddMovieForm() {
  return (
    <form>
      <input type="text" placeholder="Enter movie title" />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;
```

Import and render `AddMovieForm` in your `App` component below the `MovieList` component.

<br>

## Additional Instructions with Props and State

### Iteration 4 | Update the App Component

In this iteration, you'll modify the `App` component to manage the list of movies as a state. This will allow your app to dynamically update the movie list in response to user actions (in future iterations, such as adding a new movie).

Update the `App` component as follows:

```jsx
// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList'; // Make sure to import MovieList
import AddMovieForm from './AddMovieForm'; // Make sure to import AddMovieForm

function App() {
  // Initialize the movies state with an array of movies
  const [movies, setMovies] = useState(['The Shawshank Redemption', 'The Godfather', 'The Dark Knight']);

  return (
    <div className="App">
      <header>
        <h1>My Movie List</h1>
      </header>
      <MovieList movies={movies} /> {/* Pass movies as a prop */}
      <AddMovieForm /> {/* Keep the AddMovieForm component for now */}
    </div>
  );
}

export default App;
```

### Iteration 5 | Update the MovieList Component to Use Props

Modify the `MovieList` component to accept `movies` as a prop and use it to render the list. This change will make `MovieList` more flexible and decouple it from its data source, adhering to best practices in React development.

Update the `MovieList` component as follows:

```jsx
// src/MovieList.jsx
function MovieList({ movies }) { // Use destructuring to get movies from props
  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
  );
}

export default MovieList;
```

### Further Enhancements

To further practice with props and state, consider implementing the functionality to add a new movie through the `AddMovieForm` component. Here's a high-level overview of how you might approach this:

1. Add a method in the `App` component to update the state with a new movie.
2. Pass this method as a prop to the `AddMovieForm` component.
3. In the `AddMovieForm` component, handle form submissions to call this method and add the new movie to the list.

By incorporating these adjustments and enhancements, you'll gain practical experience with managing state and using props in React, which are foundational concepts for building dynamic applications.

### Final Step | Run and Review

Ensure that all components are correctly imported and rendered in the `App.jsx`. Run your React app using Vite (`npm run dev`), and you should see a basic movie listing page with a form to add a new movie.

**Happy Coding!** :heart:

<br>