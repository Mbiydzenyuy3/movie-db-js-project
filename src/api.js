let likedMovies = [];
let favoriteMovies = [];
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWYzNjNmOWY5YTNjNTUzNTE0OWM5MDk3MGZhMjMxMSIsIm5iZiI6MTczMzUxMDAxOS40MTYsInN1YiI6IjY3NTM0MzgzODcxYTQyYzljMjQ1NDFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FgU6EplfTnUB-e6GZZfUI7lO0Ad71oYwG54qzjXpozo",
  },
};
fetch(
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  options
)
  .then((res) => res.json())
  .then((data) => {
    const movieList = document.querySelector(".carousel-slides");

    data.results.forEach((movie, index) => {
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      img.alt = movie.title;
      img.className = "movie-poster";
      if (index === 0) img.classList.add("first-image");

      const likeButton = document.createElement("button");
      likeButton.textContent = "Like";
      likeButton.addEventListener("click", () => addToLiked(movie));

      const favoriteButton = document.createElement("button");
      favoriteButton.textContent = "Favorite";
      favoriteButton.addEventListener("click", () => addToFavorites(movie));

      const movieContainer = document.createElement("div");
      movieContainer.className = "myFavorite";
      movieContainer.appendChild(img);
      const divClass = document.createElement("div");
      divClass.className = "movie-items";
      movieContainer.appendChild(divClass);
      divClass.appendChild(likeButton);
      divClass.appendChild(favoriteButton);

      movieList.appendChild(movieContainer);
    });
  })
  .catch((err) => console.error(err));

function addToLiked(movie) {
  if (!likedMovies.some((m) => m.id === movie.id)) {
    likedMovies.push(movie);
    updateLikedMoviesDisplay();
  }
}

function addToFavorites(movie) {
  if (!favoriteMovies.some((m) => m.id === movie.id)) {
    favoriteMovies.push(movie);
    updateFavoriteMoviesDisplay();
  }
}

function updateLikedMoviesDisplay() {
  const likedMoviesContainer = document.getElementById("liked-movies");
  likedMoviesContainer.innerHTML = "";
  likedMovies.forEach((movie) => {
    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    img.alt = movie.title;
    likedMoviesContainer.appendChild(img);
  });
}

function updateFavoriteMoviesDisplay() {
  const favoritesContainer = document.querySelector(".favorites");
  favoritesContainer.innerHTML = "";
  favoriteMovies.forEach((movie) => {
    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    img.alt = movie.title;
    favoritesContainer.appendChild(img);
  });
}
