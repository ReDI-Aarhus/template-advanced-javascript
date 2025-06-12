#### Solution (script.js):

```javascript
let movies = [
  {
    name: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    director: "Christopher Nolan",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
  },
  {
    name: "The Godfather",
    genre: "Crime",
    releaseYear: 1972,
    director: "Francis Ford Coppola",
    description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
];

function displayMovies() {
  const movieList = document.getElementById('movie-list');
  movieList.innerHTML = '';

  movies.forEach((movie) => {
    const movieItem = document.createElement('div');
    movieItem.className = 'movie-item';
    movieItem.textContent = `${movie.name} - ${movie.genre} (${movie.releaseYear})`;
    movieItem.onclick = () => showMovieDetails(movie);
    movieList.appendChild(movieItem);
  });
}

function showMovieDetails(movie) {
  alert(`Name: ${movie.name}\nGenre: ${movie.genre}\nRelease Year: ${movie.releaseYear}\nDirector: ${movie.director}\nDescription: ${movie.description}`);
}

window.onload = displayMovies;
```
