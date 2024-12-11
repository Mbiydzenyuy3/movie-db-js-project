fetchMovies();
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWYzNjNmOWY5YTNjNTUzNTE0OWM5MDk3MGZhMjMxMSIsIm5iZiI6MTczMzUxMDAxOS40MTYsInN1YiI6IjY3NTM0MzgzODcxYTQyYzljMjQ1NDFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FgU6EplfTnUB-e6GZZfUI7lO0Ad71oYwG54qzjXpozo",
  },
};

const API_KEY = "de8d95a8fd855c524e4704e6647ae343";
const URL = `https://api.themoviedb.org/3/account/21673805/favorite/movies?language=en-US&page=1&sort_by=created_at.asc${API_KEY}`;
async function fetchMovies() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    displayMovies(data.results);
    console.log(data);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}
function displayMovies(movies) {
  const movieContainer = document.getElementById("liked-movies");
  movieContainer.innerHTML = "";
  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    const movieTitle = document.createElement("h3");
    movieTitle.textContent = movie.title;
    const movieParagraph = document.createElement("p");
    movieParagraph.textContent = movie.paragraph;
    const moviePoster = document.createElement("img");
    moviePoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    movieCard.appendChild(moviePoster);
    movieCard.appendChild(movieTitle);
    movieCard.appendChild(movieParagraph);
    movieContainer.appendChild(movieCard);
  });
}
fetchMovies();
