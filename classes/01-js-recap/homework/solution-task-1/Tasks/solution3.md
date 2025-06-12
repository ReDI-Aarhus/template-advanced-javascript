#### Solution (script.js):

```javascript
function addMovie() {
  const newMovie = {
    name: document.getElementById('name').value,
    genre: document.getElementById('genre').value,
    releaseYear: parseInt(document.getElementById('releaseYear').value),
    director: document.getElementById('director').value,
    description: document.getElementById('description').value,
  };

  movies.push(newMovie);
  displayMovies();
}
```
