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

let originalMovies = [...movies];
let sortOrder = '';

function addMovie() {
  const newMovie = {
    name: document.getElementById('name').value,
    genre: document.getElementById('genre').value,
    releaseYear: parseInt(document.getElementById('releaseYear').value),
    director: document.getElementById('director').value,
    description: document.getElementById('description').value,
  };

  originalMovies.push(newMovie);
  movies = [...originalMovies];
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

function showMovieDetails(movie) {
  alert(`Name: ${movie.name}\nGenre: ${movie.genre}\nRelease Year: ${movie.releaseYear}\nDirector: ${movie.director}\nDescription: ${movie.description}`);
}

function filterMovies() {
  const filterGenre = document.getElementById('filterGenre').value;
  movies = originalMovies.filter(movie => movie.genre === filterGenre || filterGenre === '');
  displayMovies();
}

function sortMovies() {
  sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
  displayMovies();
}

window.onload = displayMovies;
