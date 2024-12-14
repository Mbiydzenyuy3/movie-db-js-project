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
              <li><a href="./movie.html">Movies</a></li>
              <li><a href="./favorites.html">tv Shows</a></li>
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
            <div class="swiper-slide slide  slide-banner overlay">
                <div class="container swiper-container">
                    <div class="movie-info">
                        <span class="movie-tag">
                            season 6
                        </span>
                        <h3 class="movie-title">
                            Star Wars: Mandalorian
                        </h3>
                        <span class="movie-meta">
                            2hr40m - 2022 - Fantasy - Action
                        </span>
                        <p class="movie-discription">
                            The Mandalorian protagonist, Din Djarin,but usually called “The Mandalorian” or shortened
                            “Mando”, is a lone fighter who earns his money as a bounty hunter five years after the sheer
                            fall of the Empire.
                        </p>
                        <div class="cta">
                            <button class="primary-cta">
                                Watch Trailer
                            </button>
                            <button class="secondary-cta">
                                Add watchlist
                            </button>
                            <button class="outline-cta">
                                Add watchlist
                            </button>
                        </div>
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
    <section class="popular-release">
    <div class="container swiper">
        <div class="heading-three-item">
          <h3 class="movie-heading-popular">Popular of the week</h3>
        </div>
        <div class="new-popular-wrapper swiper-wrapper">
          <div class="new-popular-item swiper-slide">
            <div class="number">1</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/badboys.jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">wonder woman</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item swiper-slide">
            <div class="number">2</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/thebeekeeper.jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4>wonder woman</h4>
              <span class="movie-genre">
                <p>SuperHero.Action</p>
              </span>
              <p class="movie-star">⭐ 4.3| Movies</p>
            </div>
          </div>
          <div class="new-popular-item swiper-slide">
            <div class="number">3</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/lioness(1).jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4>wonder woman</h4>
              <span class="movie-genre">
                <p>SuperHero.Action</p>
              </span>
              <p class="movie-star">⭐ 4.3| Movies</p>
            </div>
          </div>
          <div class="new-popular-item swiper-slide">
            <div class="number">3</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/lioness(1).jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4>wonder woman</h4>
              <span class="movie-genre">
                <p>SuperHero.Action</p>
              </span>
              <p class="movie-star">⭐ 4.3| Movies</p>
            </div>
          </div>        
          <div class="new-popular-item swiper-slide">
            <div class="number">3</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/lioness(1).jpg" alt="img">
            </div>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4>wonder woman</h4>
              <span class="movie-genre">
                <p>SuperHero.Action</p>
              </span>
              <p class="movie-star">⭐ 4.3| Movies</p>
            </div>
          </div>
          <div class="new-popular-item swiper-slide">
            <div class="number">4</div>
            <div class="image-popular-release">
              <img class="poster-img" src="/assets/img/kraven.jpg" alt="img">
            </div>
            <a href="" class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4>wonder woman</h4>
              <span class="movie-genre">
                <p>SuperHero.Action</p>
              </span>
              <p class="movie-star">⭐ 4.3| Movies</p>
            </a>
          </div>
        </div>
        <div class="swiper-button-next"></div>
    </div>
</section>

<section>
    <div class="container">
    <h3 class="heading">Just Release</h3>
        <div class="just-release">
            <div class="just-release-poster">
                <img src="/assets/img/kingdomofapes.jpg" alt="poster">
            </div>
            <div class="just-release-info">
                <h3 class="just-release-title">
                    Kingdom of Apes
                </h3>
                <p class="movie-star">&#11088 4.6 | <span>Mystery - Movie</span></p>
            </div>
        </div>
    </div>
</section>

<section id="new-release">
      <div class = "container">
         <div class="new-release">
        <h3 class="heading">Your Watchlist</h3>
      </div>
      <div class="item-wrapper">
        
      </div>
      </div>
    </section>

     <section id="watch-list">
      <div class = "container">
        <div class="watch-list">
          <h3>Watch List</h3>
        </div>
      <div class="item-wrapper">
        
      </div>
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

/*swiper js config */
let swiper = new Swiper(".hero-section", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
  },
});

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWYzNjNmOWY5YTNjNTUzNTE0OWM5MDk3MGZhMjMxMSIsIm5iZiI6MTczMzUxMDAxOS40MTYsInN1YiI6IjY3NTM0MzgzODcxYTQyYzljMjQ1NDFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FgU6EplfTnUB-e6GZZfUI7lO0Ad71oYwG54qzjXpozo",
  },
};

fetch(
  "https://api.themoviedb.org/3/account/21673805/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
  options
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.results.forEach((movie, index) => {
      const movieList = document.querySelector("#watch-list");
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      img.alt = movie.title;
      img.className = "movie-poster";
      for (let index = 0; index < data.results.length; index++) {}
    });
  })
  .catch((err) => console.error(err));

const TopRate_API = "https://api.themoviedb.org/3/movie/top_rated? api key=";

// setupCounter(document.querySelector("#counter"));
