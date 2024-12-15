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
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((res) => res.json())
  .then((data) => {
    const movieList = document.querySelector(".item-wrapper-one");

    data.results.forEach((movie, index) => {
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      img.alt = movie.title;
      img.className = "movie-poster";
      if (index === 0) img.classList.add("first-image");

      const movieContainer = document.createElement("div");
      movieContainer.className = "myFavorite";
      movieContainer.appendChild(img);
      movieList.appendChild(movieContainer);

      const movieTitle = document.createElement("h3");
      movieTitle.className = "watch-list-movie-title";
      movieTitle.textContent = movie.title;

      const movieParagraph = document.createElement("p");
      movieParagraph.className = "movie-paragraph";
      movieParagraph.textContent = movie.paragraph;
      movieParagraph.innerHTML = `&#11088; ${movie.vote_average} | Action - Movies`;
      movieContainer.appendChild(movieTitle);
      movieContainer.appendChild(movieParagraph);
    });
  })
  .catch((err) => console.error(err));
