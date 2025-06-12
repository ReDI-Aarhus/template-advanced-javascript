#### Solution (script.js):

```javascript
let sortOrder = '';

function filterMovies() {
  const filterGenre = document.getElementById('filterGenre').value;
  movies = originalMovies.filter(movie => movie.genre === filterGenre || filterGenre === '');
  displayMovies();
}

function sortMovies() {
  sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
  displayMovies();
}

function displayMovies() {
  const movieList = document.getElementById('movie-list');
  movieList.innerHTML = '';

  const sortedMovies = sortOrder === 'asc' 
    ? [...movies].sort((a, b) => a.releaseYear - b.releaseYear)
    : [...movies].sort((a, b) => b.releaseYear - a.releaseYear);

  sortedMovies.forEach((movie, index) => {
    const movieItem = document.createElement('div');
    movieItem.className = 'movie-item';
    movieItem.textContent = `${movie.name} - ${movie.genre} (${movie.releaseYear})`;
    movieItem.onclick = () => showMovieDetails(movie);
    movieList.appendChild(movieItem);
  });
}
```