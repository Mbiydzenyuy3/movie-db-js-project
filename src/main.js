import "./main.css";
import "./style.css";
import "./carousel.js";
import "./api.js";
document.querySelector("#app").innerHTML = `
<header>
      <div class="logo">
        <div class="logo-image">
          <img class="main-logo" src="./assets/img/Logo.png" alt="logo" style="width: 40px" />
        </div>
        <div class="logo-name">
          <img class="saintstream" src="./assets/img/SaintStream.png" alt="">
        </div>
      </div>
      <div class="navbar">
        <a href="./home.html">Home</a>
        <a href="./movie.html">Movies</a>
        <a href="./favorites.html">tv Shows</a>
      </div>
      <div class="searchbar">
        <form>
          <div class="searchboxbar">
            <div class="searchbox">
              <input type="text" placeholder="Search ..." />
            </div>
            <div class="search">
              <button class="Search-icon material-symbols-outlined" id="iconsea">search
              </button>
            </div>
          </div>
        </form>
      </div>
    </header>

    <section class="hero-section swiper">
      <div class="swiper-wrapper slides ">
        <div class=" swiper-slide slide">
          <img class="image-item first-image" src="./assets/img/heroImage.webp" alt="image" />
          <div class="text">
            <h1 class="movie-title"></h1>
            <p class="movie-overwiew">
            </p>
          </div>
        </div>
        <div class="swiper-slide slide">
          <img class="image-item first-image" src="./assets/img/furry.jpg" alt="image" />
          <div class="text">
            <h1 class="movie-title"></h1>
            <p class="movie-overwiew">
            </p>
          </div>
        </div>
        <div class="swiper-slide slide">
          <img class="image-item first-image" src="./assets/img/damsel.jpg" alt="image" />
          <div class="text">
            <h1 class="movie-title"></h1>
            <p class="movie-overwiew">
            </p>
          </div>
        </div>
        <div class="swiper-slide slide">
          <img class="image-item first-image" src="./assets/img/lucifer.jpg" alt="image" />
          <div class="text">
            <h1 class="movie-title"></h1>
            <p class="movie-overwiew">
            </p>
          </div>
        </div>
      </div>
      <div style="text-align: right; width: 100%">
        <span class="dots"></span>
        <span class="dots"></span>
        <span class="dots"></span>
      </div>
    </section>
    <section class="brand-logos">
      <div class="logo-slider">
        <div class="logo-one">
          <img src="/assets/img/disney.png" alt="" class="logos" />
        </div>
        <div class="logo-two"><img src="/assets/img/netflix.png" alt="" class="logos" />
        </div>
        <div class="logo-three"><img src="/assets/img/hbo-max.png" alt="" class="logos" /></div>
        <div class="logo-four"><img src="/assets/img/pixar.png" alt="" class="logos" /></div>
        <div class="logo-five"><img src="/assets/img/marvel.png" alt="" class="logos" /></div>
        <div class="logo-six"><img src="/assets/img/starwars.png" alt="" class="logos" /></div>
        <div class="logo-seven"><img src="/assets/img/national geographic.png" alt="" class="logos" /></div>
        <div class="logo-seven"><img src="/assets/img/youTube.png" alt="" class="logos" /></div>
        <div class="logo-seven"><img src="/assets/img/webseries.png" alt="" class="logos" /></div>
      </div>
    </section>
    <section class=" swiper popular-release">
      <div class="heading-three-item">
        <h3 class="movie-heading-popular">Popular of the week</h3>
      </div>
      <div class="new-popular-wrapper swiper-wrapper">
        <div class="new-popular-item swiper-slide">
          <div class="number">1</div>
          <div class="image-popular-release">
            <img class="poster-img" src="./assets/img/badboys.jpg" alt="img">
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
          <div class="number">2</div>
          <div class="image-popular-release">
            <img class="poster-img" src="./assets/img/thebeekeeper.jpg" alt="img">
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
            <img class="poster-img" src="./assets/img/lioness(1).jpg" alt="img">
          </div>
          <div class="release-overwiew">
            <div class="pg-age">PG-13</div>
            <h4>wonder woman</h4>
            <span class="movie-genre">
              <p>SuperHero.Action</p>
            </span>
            <p class="movie-star">⭐ 4.3| Movies</p>
          </div>
        </div>        <div class="new-popular-item swiper-slide">
          <div class="number">3</div>
          <div class="image-popular-release">
            <img class="poster-img" src="./assets/img/lioness(1).jpg" alt="img">
          </div>
          <div class="release-overwiew">
            <div class="pg-age">PG-13</div>
            <h4>wonder woman</h4>
            <span class="movie-genre">
              <p>SuperHero.Action</p>
            </span>
            <p class="movie-star">⭐ 4.3| Movies</p>
          </div>
        </div>        <div class="new-popular-item swiper-slide">
          <div class="number">3</div>
          <div class="image-popular-release">
            <img class="poster-img" src="./assets/img/lioness(1).jpg" alt="img">
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
            <img class="poster-img" src="./assets/img/kraven.jpg" alt="img">
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

    </section>
    <section id="new-release">
      <div class="new-release">
        <h3>Just Realesed</h3>
      </div>
      <div class="item-wrapper">
        <div class="img-release-wrap">
          <img class="movie-release-poster" src="./assets/img/kingdomofapes.jpg" alt="" />
          <div class="movie-release-overview">
            <h3>wonder Woman</h3>
            <p class="movie-release-paragraph"><span class="rate-star">⭐4.6</span>| SuperHero.movie</p>
          </div>
        </div>
        <div class="img-release-wrap">
          <img class="movie-release-poster" src="./assets/img/kingdomofapes.jpg" alt="" />
          <div class="movie-release-overview">
            <h3>wonder Woman</h3>
            <p class="movie-release-paragraph"><span class="rate-star">⭐4.6</span>| SuperHero.movie</p>
          </div>
        </div>
        <div class="img-release-wrap">
          <img class="movie-release-poster" src="./assets/img/kingdomofapes.jpg" alt="" />
          <div class="movie-release-overview">
            <h3>wonder Woman</h3>
            <p class="movie-release-paragraph"><span class="rate-star">⭐4.6</span>| SuperHero.movie</p>
          </div>
        </div>
        <div class="img-release-wrap">
          <img class="movie-release-poster" src="./assets/img/kingdomofapes.jpg" alt="" />
          <div class="movie-release-overview">
            <h3>wonder Woman</h3>
            <p class="movie-release-paragraph"><span class="rate-star">⭐4.6</span>| SuperHero.movie</p>
          </div>
        </div>
        <div class="img-release-wrap">
          <img class="movie-release-poster" src="./assets/img/kingdomofapes.jpg" alt="" />
          <div class="movie-release-overview">
            <h3>wonder Woman</h3>
            <p class="movie-release-paragraph"><span class="rate-star">⭐4.6</span>| SuperHero.movie</p>
          </div>
        </div>
        <div class="img-release-wrap">
          <img class="movie-release-poster" src="./assets/img/kingdomofapes.jpg" alt="" />
          <div class="movie-release-overview">
            <h3>wonder Woman</h3>
            <p class="movie-release-paragraph"><span class="rate-star">⭐4.6</span>| SuperHero.movie</p>
          </div>
        </div>

      </div>

    </section>
    <footer>
      <div class="footer">
        <div class="footer-item-one">
          <div class="footer-heading">
            <h3>Our platform is trusted by millions & features best updated movies all around the world.
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
    </footer>
`;

/*swiper js config */
var swiper = new Swiper(".hero-section", {
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

var swiper = new Swiper(".popular-release", {
  slidesPerView: 3,
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
      const movieList = document.querySelector(".carousel-images");
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      img.alt = movie.title;
      img.className = "movie-poster";
      for (let index = 0; index < data.results.length; index++) {}
    });
  })
  .catch((err) => console.error(err));

// setupCounter(document.querySelector("#counter"));
