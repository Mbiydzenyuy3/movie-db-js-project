import "./main.css";
import "./style.css";
import "./carousel.js";
import "./api.js";
document.querySelector("#app").innerHTML = `
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
          <div class="search-bar">
            <form for ="" method = "GET" id="form">
              <label for="get" class="search-icon">
                <input type="text" id="input-field" />
                <button type ="button" class= "search-btn">
                  <img src="./assets/img/icons8-search-32.png" alt="" class="search-image"/>
                </button>
              </label>
            </form>
          </div>
  </header>
  <section id="hero-section" style = "background-image: url()">
    <div class = "carousel-images">
      <div class = "carousel" >
      </div>
      <div class="overlay-position">
          <p class="paragraph-one">
            Watch the best trailers and add to your favourite and watchlist.    
          </p>
          <span class="rating"></span>
          <div class = "buttons">
            <button id="cta" type="button">
              <span>Watch Trailer</span>
              </button>
              <button id="counter" type="button">Add watchlist</button>
          </div>
      </div>
      <div style="text-align: right; width: 100%">
        <span class="dots"></span> 
        <span class="dots"></span> 
        <span class="dots"></span> 
      </div>
    </div>
  </section>
  <section class="week-popular">
    <div class="pop"><h3>Most Recent Movies</h3></div>
    <div class="second-catt">
      <div class="cattii-i">
        <div class="num">1</div>
        <div class="cattii-img">
          <img src="./images/imagee.avif" alt="img" />
        </div>
        <div class="cattii-t">
          <div class="pg">PG-13</div>
          <h4>wonder woman</h4>
          <span class="supp"><p>SuperHero.Action</p></span>
          <p>⭐ 4.3| Movies</p>
        </div>
      </div>
      <div class="cattii-i">
        <div class="num">2</div>
        <div class="cattii-img">
          <img src="./images/imagee.avif" alt="img" />
        </div>
        <div class="cattii-t">
          <div class="pg">PG-13</div>
          <h4>wonder woman</h4>
          <span class="supp"><p>SuperHero.Action</p></span>
          <p>⭐ 4.3| Movies</p>
        </div>
      </div>
      <div class="cattii-i">
        <div class="num">3</div>
        <div class="cattii-img">
          <img src="./images/imagee.avif" alt="img" />
        </div>
        <div class="cattii-t">
          <div class="pg">PG-13</div>
          <h4>wonder woman</h4>
          <span class="supp"><p>SuperHero.Action</p></span>
          <p>⭐ 4.3| Movies</p>
        </div>
      </div>
      <div class="cattii-i">
        <div class="num">4</div>
        <div class="cattii-img">
          <img src="./images/imagee.avif" alt="img" />
        </div>
        <div class="cattii-t">
          <div class="pg">PG-13</div>
          <h4>wonder woman</h4>
          <span class="supp"><p>SuperHero.Action</p></span>
          <p>⭐ 4.3| Movies</p>
        </div>
      </div>
  </section>
  <section class="brand-logos">
    <div class="logo-slider">
      <div class ="logo-one">
      <img src="/assets/img/disney.png" alt="" class="logos" />
      </div>
      <div class ="logo-two"><img src="/assets/img/netflix.png" alt="" class="logos" /></div>
      <div class ="logo-three"><img src="/assets/img/hbo-max.png" alt="" class="logos" /></div>
      <div class ="logo-four"><img src="/assets/img/pixar.png" alt="" class="logos" /></div>
      <div class ="logo-five"><img src="/assets/img/marvel.png" alt="" class="logos" /></div>
      <div class ="logo-six"><img src="/assets/img/starwars.png" alt="" class="logos" /></div>
      <div class ="logo-seven"><img src="/assets/img/national geographic.png" alt="" class="logos" /></div>
      <div class ="logo-seven"><img src="/assets/img/youTube.png" alt="" class="logos" /></div>
      <div class ="logo-seven"><img src="/assets/img/webseries.png" alt="" class="logos" /></div>
    </div>
  </section>
  <section id = "movies">
    <div class = "content">
    <h2>Popular Movies</h2>
    <div class="watch-list" >
      <img src = "" alt = "image-jpg">
      <div id="overlay-one">
        <div class ="watch-content">
          <h3></h3>
          <p class="read-the-docs">
          </p>
        </div>
        <button id="counter" type="button">add to list</button>
      </div>
    </div> 
    </div>
    <div class = "content">
      <h2>Trending Movies</h2>
      <div id = "hero" class ="carousel-wrapper">
        <div id = "poster-images" class = "carousel-slides favorites" >
          <div class="poster-details"></div>
        </div>
      </div>
    </div>
    <div class = "content">
      <h2>Upcoming Movies</h2>
      <div id="liked-movies">
      <img src = "" alt = "image-jpg">
      <div id="overlay-three">
        <div class ="liked-content">
          <h3></h3>
          <p class="read-the-docs">
          </p>
        </div>
        <button id="counter" type="button"></button>
      </div>
    </div>
    </div>
  </section>
  <footer>
    <div class = "footer">
      <div class = "footer-item-one">
        <div class="footer-heading">
          <h3>Our platform is trusted by millions & features best updated movies all around the world.</h3>
        </div>
      </div>
      <div class = "footer-item-two">
        <ul class="unordered-list">
          <div class="links"><a href="">Home</a>/</div>
          <div class="links"><a href="">Release</a>/</div>
          <div class="links"><a href="">Discover</a>/</div>
        </ul>
        <div class="social-media">
          <img class = "social-media-icon" src="/assets/img/Facebook.png" alt="facebook-icon" />
          <img class = "social-media-icon" src="/assets/img/Instagram.png" alt="instagram-icon" />
          <img class = "social-media-icon" src="/assets/img/Twitter.png" alt="twitter-icon" />
          <img class = "social-media-icon" src="/assets/img/Google.png" alt="google-icon" />
        </div>
      </div>
      </div>
      <div class = "contact-footer">
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
