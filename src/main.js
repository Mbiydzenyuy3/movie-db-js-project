import "./main.css";
import "./style.css";
import "./carousel.js";
import "./api.js";
document.querySelector("#app").innerHTML = `
<header>
        <div class="container header">
          <div class="logo">
              <img class="main-logo" src=" /assets/img/Logo.png" alt="logo"/>
              <img class="logo-name" src=" /assets/img/SaintStream.png" alt="logo"/> 
          </div>
          <nav class="navbar">
            <ul>
              <li><a href="./home.html">Home</a></li>
              <li><a href="./details.html">Movies</a></li>
              <li><a href="./details.html">tv Shows</a></li>
            </ul>
          </nav>
          <div class="searchbar">
            <form class="search-form">
                  <input type="search" placeholder="Search by title..." />
                  <button type="button"  class="search-icon">
                       <img src="/assets/img/search.svg" alt="">
                  </button>
            </form>
          </div>
        </div>
</header>

 <section class="hero-banner hero-swiper">
          <div class="bg-image" id="slider"></div>
            <div class="swiper-slide slide  slide-banner overlay">
                <div class="container swiper-container">
                    <div class="movie-info" id="hero-content">
                       <h1 class="main-heading"></h1>
                       <p heading-paragraph></p>
                        
                    </div>
                </div>
            </div>
    </section>
    <section class="brand-logos">
      <div class="container logo-slider">
        <div class="logo-item">
          <img src="/assets/img/disney.png" alt="" class="logos" />
        </div>
        <div class="logo-item"><img src="/assets/img/netflix.png" alt="" class="logos" />
        </div>
        <div class="logo-item"><img src="/assets/img/hbo-max.png" alt="" class="logos" /></div>
        <div class="logo-item"><img src="/assets/img/pixar.png" alt="" class="logos" /></div>
        <div class="logo-item"><img src="/assets/img/marvel.png" alt="" class="logos" /></div>
        <div class="logo-item"><img src="/assets/img/starwars.png" alt="" class="logos" /></div>
        <div class="logo-item"><img src="/assets/img/national geographic.png" alt="" class="logos" /></div>
        <div class="logo-item"><img src="/assets/img/youTube.png" alt="" class="logos" /></div>
        <div class="logo-item"><img src="/assets/img/webseries.png" alt="" class="logos" /></div>
      </div>
    </section>
    <section class="popular-release mySwiper" id="popular-release">
    <div class="container swiper">
        <div class="heading-three-item" swiper-slide>
          <h3 class="movie-heading-popular">Popular of the week</h3>
        </div>
        <div class="new-popular-wrapper swiper-slide">
        
          <div class="new-popular-item">
            <div class="number">1</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/badboys.jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Bad Boys</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item">
            <div class="number">2</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/furry.jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Mad Furry</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
         </div>
         <div class="new-popular-item">
            <div class="number">3</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/damsel.jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Damsel</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item">
            <div class="number">4</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/hellboy.jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Hellboy</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item">
            <div class="number">5</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/gardians(1).jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Gardians of the Galaxy</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item ">
            <div class="number">6</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/kingdomofapes.jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Kingdom of Apes</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item ">
            <div class="number">7</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/thebeekeeper.jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">The Beekeeper</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div><div class="new-popular-item ">
            <div class="number">8</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/kraven.jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Kraven</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item ">
            <div class="number">9</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/lioness(1).jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Lioness</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item ">
            <div class="number">10</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/lucifer.jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Lucifer</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
        <div class="new-popular-item ">
            <div class="number">11</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/imagee.avif" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Avif</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item ">
            <div class="number">12</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/after.jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">After</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item ">
            <div class="number">13</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/fifthy shades.jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Fifthy Shades</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item >
            <div class="number">14</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/first-match(1).jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">First Match</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
       </div>
</section>

<section id="just-release" class="mySwiper swiper">
  <div class="container swiper-wrapper">
    <div class="release-heading-wrapper swiper-slide">
      <h3 class="heading">Just Release</h3>
    </div>
    <div class="just-release-wrapper swiper-slide">
            
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</section>

<section id="watch-list" class="mySwiper swiper">
  <div class = "container swiper-wrapper">
    <div class="watch-list-heading swiper-slide">
        <h3 class="heading">Your Watchlist </h3>
    </div>
    <div class="item-wrapper swiper-slide">
        
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</section>
<section id="likes" class="mySwiper swiper">
    <div class = "container swiper-wrapper">
        <div class="likes-heading">
          <h3 class="heading">Likes</h3>
        </div>
      <div class="item-wrapper-one swiper-slide">
        
      </div>
      <div id="swiper-button-next"></div>
     <div id="swiper-button-prev"></div>
      </div>
    </section>
    <footer>
      <div class ="container">
         <div class="footer">
        <div class="footer-item-one">
          <div class="footer-heading">
            <h3 class="heading-three-footer">Our platform is trusted by millions & features best updated movies all around the world.
            </h3>
          </div>
        </div>
        <div class="footer-item-two">
          <ul class="unordered-list">
            <div class="links"><a href="">Home</a>/</div>
            <div class="links"><a href="">Release</a>/</div>
            <div class="links"><a href="">Discover</a>/</div>
          </ul>
          <div class="social-media">
            <img class="social-media-icon" src="/assets/img/Facebook.png" alt="facebook-icon" />
            <img class="social-media-icon" src="/assets/img/Instagram.png" alt="instagram-icon" />
            <img class="social-media-icon" src="/assets/img/Twitter.png" alt="twitter-icon" />
            <img class="social-media-icon" src="/assets/img/Google.png" alt="google-icon" />
          </div>
        </div>
      </div>
      <div class="contact-footer">
        <div class="contact-policy">
          <span>Privacy Policy</span>
          <span>Terms of service</span>
          <span>Language</span>
        </div>
        <div class="copyright">
          &copy 2024
        </div>
      </div>
      </div>
    </footer>
`;

// setupCounter(document.querySelector("#counter"));

// API for release movie section
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmEwM2JhZjAwODc4YTBhNmE4MDYwN2U1ZGI5NzFmMCIsIm5iZiI6MTczMzc4Mzc4MC4yNTUsInN1YiI6IjY3NTc3MGU0MGFiN2U4MDc3Y2ZiZjFlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XXDs4eNLPoVC8cYP4I4R_ZT48CSvQPpCMqUGOWCPlVk",
  },
};
fetch(
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
  options
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const firstSection = document.querySelector(".just-release-wrapper");
    for (let index = 0; index < data.results.length; index++) {
      const movie = data.results[index];
      const posterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image+Available";
      const addDiv = document.createElement("div");
      addDiv.className = "released-movies";
      firstSection.appendChild(addDiv);
      const img = document.createElement("img");
      img.src = posterPath;
      img.alt = movie.title;
      img.className = "movie-poster-one";
      addDiv.appendChild(img);
      const movieParagraph = document.createElement("p");
      movieParagraph.className = "movie-paragraph";
      movieParagraph.textContent = movie.paragraph;
      movieParagraph.innerHTML = `&#11088; ${movie.vote_average} | Mystery - Movies`;
      addDiv.appendChild(movieParagraph);
    }
  })
  .catch((err) => console.error(err));

const API_KEY = "688d9e5aaae7b1a265762fb4097fd8b6";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

// DOM Elements
const heroSlider = document.getElementById("slider");
const heroContent = document.getElementById("hero-content");
const popularMovies = document.getElementById("popular-release");

// Global variables
let currentIndex = 0;
let movies = [];
let genresMap = {};

function startSlider() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % movies.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateHeroText(currentIndex);
  }, 5000);
}
fetchTrendingMovies();
let currentSlide = 0;
let trendingMovies = [];
// Fetch trending movies for the hero slider
async function fetchTrendingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );
  const data = await response.json();
  trendingMovies = data.results.slice(0, 4);
  renderHeroSlider(trendingMovies);
  startHeroSlider();
}
// Fetch generic movie data
async function fetchMovies(endpoint, renderFunction, limit = 10) {
  const response = await fetch(endpoint);
  const data = await response.json();
  renderFunction(data.results.slice(0, limit));
}
// Render Hero Slider
function renderHeroSlider(movies) {
  heroSlider.innerHTML = movies
    .map(
      (movie) => `
        <img src="${IMAGE_BASE_URL}${movie.backdrop_path}" alt="${movie.title}">
    `
    )
    .join("");
  updateHeroContent(0);
}
// Render Section Sliders
function renderMovieSlider(movies, container) {
  container.innerHTML = movies
    .map(
      (movie) => `
        <img src="${IMAGE_BASE_URL}${movie.poster_path}" alt="${movie.title}">
    `
    )
    .join("");
}
// Update Hero Content
function updateHeroContent(index) {
  const movie = trendingMovies[index];
  heroContent.innerHTML = `
        <h1>${movie.title}</h1>
        <p>${movie.overview}</p>
        <div class="hero-buttons">
          <div class="cta">
            <button class="primary-cta">
              <img src="/assets/img/play.png" alt="button play icon">
              <span>Play now</span>  
            </button>
            <button class="secondary-cta">
              <span> Watch trailer</span>
            </button>
            <a href="watch-list">
              <button class="outline-cta">
                <img src="/assets/img/bookmark.png" alt="button play icon">
                <span>Add watchlist</span>
              </button>
            </a>
        </div>
        </div>
    `;
}
// Start Auto Slide for Hero
function startHeroSlider() {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % trendingMovies.length;
    heroSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateHeroContent(currentSlide);
  }, 5000);
}
