import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <section id="hero-section carousel-images">
    <header id="header">
          <nav class="nav-bar">
            <div class="logo">
              <img src="./assets/img/Logo.png" alt="" class="logo-image" />
              <span class="logo-name">
                <img
                  src="./assets/img/SaintStream.png"
                  alt=""
                  class="logo-name"
                />
              </span>
            </div>
            <div class="menu">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Favorite</a>
            </div>
            <form id="form">
              <label for="get" class="search-icon">
                <input type="text" id="input-field" />
                <button id="search-btn">
                  <img
                    src="./assets/img/icons8-search-32.png"
                    alt=""
                    class="search-image"
                  />
                </button>
              </label>
              <div class="notify-icon">
                <img
                  src="./assets/img/icons8-notification-32.png"
                  alt=""
                  class="notify-image"
                />
              </div>
              <div class="account-icon">
                <img
                  src="./assets/img/Image(1).png"
                  alt=""
                  class="account-image"
                />
                <div class="arrow-down">
                  <img
                    src="./assets/img/Arrow - Down 2.png"
                    alt=""
                    class="arrow-image"
                  />
                </div>
              </div>
            </form>
          </nav>
    </header>
    <div id="posters" class="slider-wrapper">
      <div id="overlay-main" class="slider">
        <h1></h1>
        <div class="card">
          <button id="counter" type="button"></button>
        </div>
        <p class="read-the-docs">
        </p>
      </div>
    </div>
    <div style="text-align:center">
      <span class="dots"></span> 
      <span class="dots"></span> 
      <span class="dots"></span> 
    </div>
  </section>

  <section id = "movies">
   <div id="watch-list">
      <div id="overlay">
        <h1></h1>
        <div class="card">
          <button id="counter" type="button"></button>
        </div>
        <p class="read-the-docs">
        </p>
      </div>
    </div>
   <div id="favorites">
      <div id="overlay">
        <h1></h1>
        <div class="card">
          <button id="counter" type="button"></button>
        </div>
        <p class="read-the-docs">
        </p>
      </div>
    </div>
   <div id="liked-movies">
      <div id="overlay">
        <h1></h1>
        <div class="card">
          <button id="counter" type="button"></button>
        </div>
        <p class="read-the-docs">
        </p>
      </div>
    </div>
  </section>
 
`;
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
    console.log(data);

    const movieList = document.getElementById("posters");
    const watchMovies = document.getElementById("watch-list");
    const favouriteMovies = document.getElementById("favorites");
    const likedMovies = document.getElementById("liked-movies");
    for (let index = 0; index < data.results.length; index++) {
      watchMovies.innerHTML = data.results[index];
      favouriteMovies.innerHTML = data.results[index];
      likedMovies.innerHTML = data.results[index];
      const movie = data.results[index];
      const posterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image+Available";

      const img = document.createElement("img");
      const addDiv = document.createElement("div");
      addDiv.className = "details";
      img.src = posterPath;
      img.alt = movie.title;
      img.className = "movie-poster";
      movieList.appendChild(img);
      movieList.appendChild(addDiv);
    }
  })
  .catch((err) => console.error(err));

// setupCounter(document.querySelector("#counter"));
