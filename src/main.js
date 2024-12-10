import "./main.css";
import "./style.css";
import "./carousel.js";
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
  <section id="hero-section" 
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
      <div style="text-align:center">
      <span class="dots"></span> 
      <span class="dots"></span> 
      <span class="dots"></span> 
    </div>
      <div class="overlay">
          <span class="movies">Movies</span>
          <h3 class="heading-three"></h3>
          <p class="paragraph-one">
          </p>
          <span class="rating"></span>
          <div class = "buttons">
          <button id="cta" type="button">
            <img src="" alt="" class="watchlist" />
              <span>Watch Trailer</span>
              </button>
              <button id="counter" type="button">Add watchlist</button>
            </div>
      </div>
    </div>
  </section>
  <section class="brand-logos">
    <div class="logo-slider">
      <div class ="logo-one"></div>
      <div class ="logo-two"></div>
      <div class ="logo-three"></div>
      <div class ="logo-four"></div>
      <div class ="logo-five"></div>
      <div class ="logo-six"></div>
      <div class ="logo-seven"></div>
    </div>
  </section>
  <section id="cards">
    <div id="posters" class="slider-wrapper">
      <div class ="hero-image"></div>
      <div class ="hero-image-two"></div>
      <div class ="hero-image-three"></div>
      <div class ="hero-image-four"></div>
    </div>
  </section>
  
  <section class="watched">
  <div id = "hero" class = "carousel-wrapper">
      <div id = "poster-images" class = "carousel-slides" >
        <div id="overlay">
          <span class="movies">Movies</span>
          <h3 class="heading-three-item"></h3>
          <p class="para-one">
          </p>
          <span class="rating"></span>
          <div class = "buttons">
          <button id="cta" type="button">
            <img src="" alt="" class="watchlist" />
              <span>Watch Trailer</span>
              </button>
              <button id="counter" type="button">Add watchlist</button>
            </div>
          
        </div>
      </div>
    </div>
  </section>
  <section id = "movies">
  <div id="watch-list">
    <img src = "" alt = "image-jpg">
      <div id="overlay-one">
        <h3 class="heading-three"></h3>
        <p class="paragraph-one">
        </p>
        <button id="counter" type="button"></button>
      </div>
  </div>
  <div id="favorites">
    <img src = "" alt = "image-jpg">
      <div id="overlay-two">
        <h3></h3>
        <p class="read-the-docs">
        </p>
        <button id="counter" type="button"></button>
      </div>
  </div>
  <div id="liked-movies">
      <img src = "" alt = "image-jpg">
      <div id="overlay-three">
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
    const overlayClass = document.querySelector(".heading-three-item");
    const paraTag = document.querySelector(".para-one");
    const classHeroImage = document.querySelector(".hero-image");
    const carouselImages = document.querySelector(".carousel-images");

    for (let index = 0; index < 14; index++) {
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
