import "./style.css";

document.querySelector("#app").innerHTML = `
  <section id="hero-section" class ="carousel-images">
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
            <div class = "icon-bar">
              <form id="search-btn">
                  <input type="text" class="input-field" />
                  <img
                    src="./assets/img/icons8-search-32.png"
                    alt=""
                    class="search-image"
                  />
                </form>
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
            </div>
          </nav>
    </header>
    <div style="text-align:center">
      <span class="dots"></span> 
      <span class="dots"></span> 
      <span class="dots"></span> 
    </div>
  </section>
  <section id = "movies">
  <div id="posters" class="slider-wrapper">
      <div id = "poster-images">
      </div>
      <form id="form">
        <label for="get" class="search-icon">
          <input type="text" id="input-field" />
            <img
              src="./assets/img/icons8-search-32.png"
              alt=""
              class="search-image"
            />
        </label>
      </form>
    </div>
    <div id="watch-list">
    <img src = "" alt = "image-jpg">
      <div id="overlay">
        <h3></h3>
        <p class="read-the-docs">
        </p>
        <button id="counter" type="button"></button>
      </div>
    </div>
   <div id="favorites">
    <img src = "" alt = "image-jpg">
      <div id="overlay">
        <h3></h3>
        <p class="read-the-docs">
        </p>
        <button id="counter" type="button"></button>
      </div>
    </div>
    <div id="liked-movies">
      <img src = "" alt = "image-jpg">
      <div id="overlay">
        <h3></h3>
        <p class="read-the-docs">
        </p>
        <button id="counter" type="button"></button>
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

    const movieList = document.getElementById("poster-images");
    const watchMovies = document.getElementById("watch-list");
    const favouriteMovies = document.getElementById("favorites"); 
    const likedMovies = document.getElementById("liked-movies");

    for (let index = 0; index < data.results.length; index++) {
      const movie = data.results[index];
      const posterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image+Available";

      const img = document.createElement("img");
      const paragraphTag = document.createElement("p");
      const heading = document.createElement("h3");
      img.src = posterPath;
      img.alt = movie.title;
      img.className = "movie-poster";
      paragraphTag.className = "paragraph";
      movieList.appendChild(img);
    }
  })
  .catch((err) => console.error(err));

// setupCounter(document.querySelector("#counter"));
