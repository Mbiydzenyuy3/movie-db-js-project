// async function loadMovies() {
//   const movies = await fetchMovies(); // Fetch movies
//   const swiperWrapper = document.querySelector(".swiper-wrapper");

//   movies.forEach((movie) => {
//     const slide = document.createElement("div");
//     slide.classList.add("swiper-slide");
//     slide.innerHTML = `
//       <img
//         src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
//         alt="${movie.title}"
//         data-movie-id="${movie.id}"
//       >
//       <h3>${movie.title}</h3>
//     `;
//     swiperWrapper.appendChild(slide);
//   });

//   // Add click event listener to each poster
//   document.querySelectorAll(".swiper-slide img").forEach((img) => {
//     img.addEventListener("click", (e) => {
//       const movieId = e.target.getAttribute("data-movie-id");
//       goToDetailsPage(movieId);
//     });
//   });
// }

// function goToDetailsPage(movieId) {
//   // Navigate to the movie details page
//   window.location.href = `movie-details.html?movieId=${movieId}`;
// }

// function getMovieIdFromUrl() {
//   const params = new URLSearchParams(window.location.search);
//   return params.get("movieId");
// }

// const API_KEY = "4ef363f9f9a3c5535149c90970fa2311";
// const BASE_URL = "https://api.themoviedb.org/3";

// async function fetchMovieDetails(movieId) {
//   const detailsUrl = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
//   const castUrl = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
//   const similarUrl = `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;

//   const [detailsResponse, castResponse, similarResponse] = await Promise.all([
//     fetch(detailsUrl),
//     fetch(castUrl),
//     fetch(similarUrl),
//   ]);

//   const details = await detailsResponse.json();
//   const cast = await castResponse.json();
//   const similar = await similarResponse.json();

//   return { details, cast, similar };
// }

// async function loadMovieDetails() {
//   const movieId = getMovieIdFromUrl();
//   const { details, cast, similar } = await fetchMovieDetails(movieId);

//   // Display Movie Details
//   document.querySelector("#movie-detail").innerHTML = `
//     <h1>${details.title}</h1>
//     <img src="https://image.tmdb.org/t/p/w500${details.poster_path}" alt="${details.title}">
//     <p>${details.overview}</p>
//     <p><strong>Release Date:</strong> ${details.release_date}</p>
//     <p><strong>Rating:</strong> ⭐ ${details.vote_average}</p>
//   `;

//   // Display Cast
//   const castSection = document.querySelector("#movie-cast");
//   cast.cast.slice(0, 10).forEach((member) => {
//     const castItem = document.createElement("div");
//     castItem.innerHTML = `
//       <img src="https://image.tmdb.org/t/p/w200${member.profile_path}" alt="${member.name}">
//       <p>${member.name} as ${member.character}</p>
//     `;
//     castSection.appendChild(castItem);
//   });

//   // Display Similar Movies
//   const similarSection = document.querySelector("#similar-movies");
//   similar.results.slice(0, 10).forEach((movie) => {
//     const similarItem = document.createElement("div");
//     similarItem.innerHTML = `
//       <img
//         src="https://image.tmdb.org/t/p/w200${movie.poster_path}"
//         alt="${movie.title}"
//         data-movie-id="${movie.id}"
//       >
//       <p>${movie.title}</p>
//     `;
//     similarItem.querySelector("img").addEventListener("click", () => {
//       goToDetailsPage(movie.id); // Navigate to the clicked movie's details page
//     });
//     similarSection.appendChild(similarItem);
//   });
// }

// loadMovieDetails();
