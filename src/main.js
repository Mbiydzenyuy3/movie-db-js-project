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
  <section id="hero-section" style = "background-image: url{ }">
    <div class = "carousel-images">
      <div class = "carousel" >
        <img src="/assets/img/swagger(1).jpg" alt="" class="img-carousel first-image" />
        <img src="/assets/img/how to get away with murder(1)" alt="" class="img-carousel" />
        <img src="/assets/img/first-match" alt="" class="img-carousel" />
        <img src="/assets/img/bel-air(1)" alt="" class="img-carousel" />
        <img src="/assets/img/lioness(1)" alt="" class="img-carousel" />
        <img src="/assets/img/gardians(1)" alt="" class="img-carousel" />
        <div class="carousel-button-next"></div>
        <div class="carousel-button-prev"></div>
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
      <div style="text-align:center">
      <span class="dots"></span> 
      <span class="dots"></span> 
      <span class="dots"></span> 
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
    </div>
  </section>
  <section id = "movies">
    <div class = "content">
    <h2>Trending Movies</h2>
    <div id="watch-list" >
      <img src = "" alt = "image-jpg">
      <div id="overlay-one">
        <div class ="watch-content">
          <h3></h3>
          <p class="read-the-docs">
          </p>
        </div>
        <button id="counter" type="button"></button>
      </div>
    </div> 
    </div>
    <div class = "content">
      <h2>Popular Movies</h2>
      <div id = "hero" class = "carousel-wrapper">
      <div id = "poster-images" class = "carousel-slides" >
        
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
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  options
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const movieList = document.getElementById("poster-images");
    const overlayClass = document.querySelector(".heading-three-item");
    const paraTag = document.querySelector(".para-one");

    for (let index = 0; index < data.results.lenghth; index++) {
      const movie = data.results[index];
      const posterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image+Available";
      overlayClass.innerHTML = data.results[0].original_title;
      paraTag.innerHTML = data.results[0].overview;

      const img = document.createElement("img");
      const paragraphTag = document.createElement("p");
      const heading = document.createElement("h3");
      img.src = posterPath;
      img.alt = movie.title;
      img.className = "movie-poster";
      if (index === 0) {
        img.classList.add("first-image");
      }
      paragraphTag.className = "paragraph";
      movieList.appendChild(img);
    }
  })
  .catch((err) => console.error(err));

!(function (d) {
  // Set classes
  let itemClassName = "carousel-images";
  let items = d.getElementsByClassName(itemClassName),
    totalItems = items.length,
    slide = 0,
    moving = true;

  function setInitialClasses() {
    // Targets the previous, current, and next items
    // This assumes there are at least three items.
    items[totalItems - 1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
  }
  // Set event listeners
  function setEventListeners() {
    let next = d.getElementsByClassName("carousel-button-next")[0],
      prev = d.getElementsByClassName("carousel-button-prev")[0];
    next.addEventListener("click", moveNext);
    prev.addEventListener("click", movePrev);
  }

  // Next navigation handler
  function moveNext() {
    // Check if moving
    if (!moving) {
      // If it's the last slide, reset to 0, else +1
      if (slide === totalItems - 1) {
        slide = 0;
      } else {
        slide++;
      }
      // Move carousel to updated slide
      moveCarouselTo(slide);
    }
  }
  // Previous navigation handler
  function movePrev() {
    // Check if moving
    if (!moving) {
      // If it's the first slide, set as the last slide, else -1
      if (slide === 0) {
        slide = totalItems - 1;
      } else {
        slide--;
      }

      // Move carousel to updated slide
      moveCarouselTo(slide);
    }
  }

  function disableInteraction() {
    // Set 'moving' to true for the same duration as our transition.
    // (0.5s = 500ms)

    moving = true;
    // setTimeout runs its function once after the given time
    setTimeout(function () {
      moving = false;
    }, 5000);
  }

  function moveCarouselTo(slide) {
    // Check if carousel is moving, if not, allow interaction
    if (!moving) {
      // temporarily disable interactivity
      disableInteraction();
      // Update the "old" adjacent slides with "new" ones
      var newPrevious = slide - 1,
        newNext = slide + 1,
        oldPrevious = slide - 2,
        oldNext = slide + 2;
      // Test if carousel has more than three items
      if (totalItems - 1 > 3) {
        // Checks and updates if the new slides are out of bounds
        if (newPrevious <= 0) {
          oldPrevious = totalItems - 1;
        } else if (newNext >= totalItems - 1) {
          oldNext = 0;
        }
        // Checks and updates if slide is at the beginning/end
        if (slide === 0) {
          newPrevious = totalItems - 1;
          oldPrevious = totalItems - 2;
          oldNext = slide + 1;
        } else if (slide === totalItems - 1) {
          newPrevious = slide - 1;
          newNext = 0;
          oldNext = 1;
        }
        // Now we've worked out where we are and where we're going,
        // by adding/removing classes we'll trigger the transitions.
        // Reset old next/prev elements to default classes
        items[oldPrevious].className = itemClassName;
        items[oldNext].className = itemClassName;
        // Add new classes
        items[newPrevious].className = itemClassName + " prev";
        items[slide].className = itemClassName + " active";
        items[newNext].className = itemClassName + " next";
      }
    }
  }
})(document);

// setupCounter(document.querySelector("#counter"));
