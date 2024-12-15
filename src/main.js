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
            <a href="" class="image-popular-release">
              <img class="poster-img" src="/assets/img/badboys.jpg" alt="img">
            </a>
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
            <a href="" class="image-popular-release">
              <img class="poster-img" src="/assets/img/furry.jpg" alt="img">
            </a>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Mad Furry</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
         </div>
         <div class="new-popular-item swiper-slide">
            <div class="number">3</div>
            <a href="" class="image-popular-release">
              <img class="poster-img" src="/assets/img/damsel.jpg" alt="img">
            </a>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Damsel</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item swiper-slide">
            <div class="number">4</div>
            <a href="" class="image-popular-release">
              <img class="poster-img" src="/assets/img/hellboy.jpg" alt="img">
            </a>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Hellboy</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item swiper-slide">
            <div class="number">5</div>
            <a href="" class="image-popular-release">
              <img class="poster-img" src="/assets/img/gardians(1).jpg" alt="img">
            </a>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Gardians of the Galaxy</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item swiper-slide">
            <div class="number">6</div>
            <a href="" class="image-popular-release">
              <img class="poster-img" src="/assets/img/kingdomofapes.jpg" alt="img">
            </a>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Kingdom of Apes</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item swiper-slide">
            <div class="number">7</div>
            <a href="" class="image-popular-release">
              <img class="poster-img" src="/assets/img/thebeekeeper.jpg" alt="img">
            </a>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">The Beekeeper</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div><div class="new-popular-item swiper-slide">
            <div class="number">8</div>
            <a href="" class="image-popular-release">
              <img class="poster-img" src="/assets/img/kraven.jpg" alt="img">
            </a>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Kraven</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item swiper-slide">
            <div class="number">9</div>
            <a href="" class="image-popular-release">
              <img class="poster-img" src="/assets/img/lioness(1).jpg" alt="img">
            </a>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Lioness</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item swiper-slide">
            <div class="number">10</div>
            <a href="" class="image-popular-release">
              <img class="poster-img" src="/assets/img/lucifer.jpg" alt="img">
            </a>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Lucifer</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
        <div class="new-popular-item swiper-slide">
            <div class="number">11</div>
            <a href="" class="image-popular-release">
              <img class="poster-img" src="/assets/img/imagee.avif" alt="img">
            </a>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Avif</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item swiper-slide">
            <div class="number">12</div>
            <a href="" class="image-popular-release">
              <img class="poster-img" src="/assets/img/after.jpg" alt="img">
            </a>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">After</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item swiper-slide">
            <div class="number">13</div>
            <a href="" class="image-popular-release">
              <img class="poster-img" src="/assets/img/fifthy shades.jpg" alt="img">
            </a>
            <div class="release-overwiew">
              <div class="pg-age">PG-13</div>
              <h4 class="new-release-title">Fifthy Shades</h4>
              <span class="movie-genre">
                <p>SuperHero - Action</p>
              </span>
              <p class="movie-star">⭐ 4.3 | <span>Movies</span></p>
            </div>
          </div>
          <div class="new-popular-item swiper-slide">
            <div class="number">14</div>
            <a href="" class="image-popular-release">
              <img class="poster-img" src="/assets/img/first-match(1).jpg" alt="img">
            </a>
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

<section id="just-release">
  <div class="container">
    <div class="release-heading-wrapper">
      <h3 class="heading">Just Release</h3>
    </div>
    <div class="just-release-wrapper">
            
    </div>
  </div>
</section>

<section id="watch-list">
  <div class = "container">
    <div class="watch-list-heading">
        <h3 class="heading">Your Watchlist</h3>
    </div>
      <div class="item-wrapper">
        
    </div>
  </div>
</section>
<section id="likes">
    <div class = "container">
        <div class="likes-heading">
          <h3 class="heading">Likes</h3>
        </div>
      <div class="item-wrapper-one">
        
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
      const img = document.createElement("img");
      img.src = posterPath;
      img.alt = movie.title;
      img.className = "movie-poster";
      firstSection.appendChild(img);
    }
  })
  .catch((err) => console.error(err));
