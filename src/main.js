import "./main.css";
import "./style.css";
import "./carousel.js";
import "./api.js";
// import "./counter.js";
import "./swiper.js";
import "./details.js";

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
            <div class="search-bar">
              <form class="search-form">
                <input type="search" id="searchInput" placeholder="Search by title..." />
                <button type="button"  class="search-icon" id="searchButton">
                 <img src="/assets/img/search.svg" alt="">
                </button>
              </form>
            </div>
          </div>
  </header>

  <section>
			<div class="swiper mySwiper-container">
				<div class="swiper-wrapper" id="swiper-item">
			
					<div id="slider" class="swiper-slide">
						<div class="movie-banner"></div>
						<h3>Movie title</h3>

						<div class="container">
							<div class="back">
								<div class="movie-tag">series</div>
								<div class="release_date">1985</div>
								<div>
									<p>Consectetur adipisicing elit. Possimus, praesentium?</p>
									<p>
										Provident consectetur natus voluptatem quis tenetur sed
										beatae eius sint.
									</p>
									<div class="buttons">
                  <a href="">
                    <button class="primary-cta">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      fill="rgba(255,255,255,1)">
                      <path
                        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM10.6219 8.41459C10.5562 8.37078 10.479 8.34741 10.4 8.34741C10.1791 8.34741 10 8.52649 10 8.74741V15.2526C10 15.3316 10.0234 15.4088 10.0672 15.4745C10.1897 15.6583 10.4381 15.708 10.6219 15.5854L15.5008 12.3328C15.5447 12.3035 15.5824 12.2658 15.6117 12.2219C15.7343 12.0381 15.6846 11.7897 15.5008 11.6672L10.6219 8.41459Z">
                      </path>
                    </svg>
                    <span>Play now</span>
                    </button>
                  </a>
                  <a href="">
                    <button class="secondary-cta">
                      Watch trailer
                     </button>
                  </a>
                   <a href="watch-list">
                    <button class="outline-cta">
                       <i class="ri-bookmark-line"></i>
                     <span>Add watchlist</span>
                     </button>
                   </a>
                </div>
        
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</section>

  <section id="brand-logos" class="swiper logo-carousel">
        <div class="container swiper-wrapper" id="override-swiper-wrapper">
          <div class="swiper-slide" id="slide-img-wrap">
            <img src="/assets/img/disney.png" alt="" class="logos" />
          </div>
          <div class="swiper-slide" id="slide-img-wrap-1"><img src="/assets/img/netflix.png" alt="" class="logos" />
          </div>
          <div class="swiper-slide" id="slide-img-wrap-2"><img src="/assets/img/hbo-max.png" alt="" class="logos" /></div>
          <div class="swiper-slide" id="slide-img-wrap-3"><img src="/assets/img/pixar.png" alt="" class="logos" /></div>
          <div class="swiper-slide" id="slide-img-wrap-4"><img src="/assets/img/marvel.png" alt="" class="logos" /></div>
          <div class="swiper-slide" id="slide-img-wrap-5"><img src="/assets/img/starwars.png" alt="" class="logos" /></div>
          <div class="swiper-slide" id="slide-img-wrap-6"><img src="/assets/img/national geographic.png" alt="" class="logos" /></div>
          <div class="swiper-slide" id="slide-img-wrap-7"><img src="/assets/img/youTube.png" alt="" class="logos" /></div>
          <div class="swiper-slide" id="slide-img-wrap-8"><img src="/assets/img/webseries.png" alt="" class="logos" /></div>
        </div>
        <div class="swiper-button-next" id="btn-next"></div>
        <div class="swiper-button-prev" id="btn-prev"></div>
  </section>
  <section class="popular-release mySwiper" id="popular-release">
      <div class="container swiper">
          <div class="heading-three-item" swiper-slide>
            <h3 class="heading">Popular of the week</h3>
          </div>
          <div class="new-popular-wrapper">
          
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
        </div>
  </section>

  <div class="new-movie-section">
    <h3 class="heading">Latest releases</h3>

    <section id="just-release" class="mySwiper swiper">
      <div id="swiper-wrapper-1" class="container swiper-wrapper">
        
      </div>

      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </section>
  </div>

  <div class="watch-movie-section">
    <h3 class="heading"> Watchlist </h3>

    <section id="watch-list" class="mySwiper swiper">
      <div id= "swiper-wrapper-2" class = "container swiper-wrapper">
      
      </div>

      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </section>
  </div>

  <div class="likes-section">
    <h3 class="heading">Likes</h3>

    <section id="likes" class="mySwiper swiper">
    <div id= "swiper-wrapper-3" class = "container swiper-wrapper">
     
      
    </div>

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    </section>
  </div>

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
    const firstSection = document.getElementById("swiper-wrapper-1");
    for (let index = 0; index < data.results.length; index++) {
      const movie = data.results[index];
      const posterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image+Available";
      const slide = document.createElement("div");
      slide.className = "released-movies swiper-slide";
      firstSection.appendChild(slide);
      const img = document.createElement("img");
      img.src = posterPath;
      img.alt = movie.title;
      img.className = "movie-poster";
      slide.appendChild(img);
      const movieTitle = document.createElement("h4");
      movieTitle.className = "movie-title";
      movieTitle.textContent = movie.title;
      movieTitle.innerHTML = `${movie.original_name}`;
      slide.appendChild(movieTitle);

      const movieParagraph = document.createElement("p");
      movieParagraph.className = "movie-paragraph";
      movieParagraph.textContent = movie.paragraph;
      movieParagraph.innerHTML = `&#11088; ${movie.vote_average} | Action - Movies `;
      slide.appendChild(movieParagraph);
    }
  })
  .then(() => {
    const swiper = new Swiper("#just-release", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  })
  .catch((err) => console.error(err));
