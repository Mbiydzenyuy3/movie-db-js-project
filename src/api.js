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
    const movieList = document.getElementById("swiper-wrapper-3");
  
    for (let index = 0; index < data.results.length; index++) {
      const movie = data.results[index];
      const posterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image+Available";
      const slide = document.createElement("div");
      slide.className = "released-movies swiper-slide";
      movieList.appendChild(slide);

      const img = document.createElement("img");
      img.src = posterPath;
      img.alt = movie.title;
      img.className = "movie-poster-one";
      slide.appendChild(img);

      const movieTitle = document.createElement("h4");
      movieTitle.className = "movie-title";
      movieTitle.textContent = movie.title;
      slide.appendChild(movieTitle);

      const movieParagraph = document.createElement("p");
      movieParagraph.className = "movie-paragraph";
      movieParagraph.textContent = movie.paragraph;
      movieParagraph.innerHTML = `&#11088; ${movie.vote_average} | Mystery - Movies `;
      slide.appendChild(movieParagraph);
    }
  })
  .then(() => {
    const swiper = new Swiper("#likes", {
      slidesPerView: 4,
      spaceBetween: 5,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  })
  .catch((err) => console.error(err));
