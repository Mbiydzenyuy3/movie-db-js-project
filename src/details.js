// //  Retrieve movie details
// const movie = JSON.parse(localStorage.getItem("selectedMovie"));
// console.log(movie);
// const API_KEY = "4ef363f9f9a3c5535149c90970fa2311";
// const BASE_URL = "https://api.themoviedb.org/3";
// const IMG_PATH = "https://image.tmdb.org/t/p/w500";
// if (movie) {
//   // Populate your HTML elements with movie data
//   const movieSection = document.getElementById("hero-section-one");
//   movieSection.style.backgroundImage = `url('https://image.tmdb.org/t/p/w1280${
//     movie.backdrop_path || movie.poster_path
//   })')`;
//   document.getElementById("movie-title").textContent = movie.title;
//   document.getElementById("movie-overview").textContent = movie.overview;
//   document.getElementById(
//     "greyText"
//   ).textContent = `Date: ${movie.release_date} | Popularity score:${movie.popularity}`;
// } else {
//   console.error("No movie data found in localStorage.");
// }
// function saveToLocalStorage(movie) {
//   let watchlist = JSON.parse(localStorage.getItem("watchlist")) || []; // Retrieve existing watchlist or create empty array
//   const movieExists = watchlist.some((item) => item.id === movie.id); // Check if the movie already exists
//   if (!movieExists) {
//     watchlist.push(movie); // Add movie to watchlist
//     localStorage.setItem("watchlist", JSON.stringify(watchlist)); // Save updated list
//   }
// }
// // Add event listener to bookmark button
// const bookmarkButton = playBtn.querySelector(".bookmark-btn");
// bookmarkButton.addEventListener("click", () => {
//   // Toggle bookmark icon color
//   const icon = bookmarkButton.querySelector("i");
//   icon.classList.toggle("fa-regular");
//   icon.classList.toggle("fa-solid");
//   icon.style.color = icon.classList.contains("fa-solid") ? "green" : ""; // Green when solid
//   // Save movie to localStorage
//   saveToLocalStorage(movie);
// });
// async function sameClassMovies(movieId) {
//   // Get movie ID from localStorage instead of URL
//   const popularContainer = document.querySelector("#just-release");
//   console.log(movieId);
//   if (!movieId) {
//     console.error("Error: Movie ID not found.");
//     return;
//   }
//   try {
//     const response = await fetch(
//       `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`
//     );
//     if (!response.ok) {
//       console.error(`Error fetching similar movies: ${response.status}`);
//       return;
//     }
//     const data = await response.json();
//     const similarMoviesContainer =
//       document.getElementById("watchlist-carousel");
//     similarMoviesContainer.innerHTML = "";
//     data.results.forEach((movie) => {
//       const movieEl = document.createElement("div");
//       movieEl.classList.add("movie-similar");
//       movieEl.innerHTML = `
//            <div class="movie-img">
//               <img src="${IMG_PATH}${movie.poster_path}" alt="${movie.title}">
//             </div>
//             <div class="movie-details">
//                <h3 class="movie-title">${movie.title}</h3>
//            <div class="movie-rating">
//               :star: ${movie.vote_average.toFixed(1)}
//                <button class="bookmark-btn">
//                   <i class="fa-regular fa-bookmark"></i>
//                 </button>
//             </div>
//           </div>
//         `;
//       similarMoviesContainer.appendChild(movieEl);
//     });
//   } catch (error) {
//     console.error("Error fetching similar movies:", error.message);
//   }
//   const bookmarkButton = similarMovies.querySelector(".bookmark-btn");
//   bookmarkButton.addEventListener("click", () => {
//     // Toggle bookmark icon color
//     const icon = bookmarkButton.querySelector("i");
//     icon.classList.toggle("fa-regular");
//     icon.classList.toggle("fa-solid");
//     icon.style.color = icon.classList.contains("fa-solid") ? "green" : ""; // Green when solid
//     // Save movie to localStorage
//     saveToLocalStorage(movie);
//   });
//   const prevBtn = document.querySelector(".prev");
//   const nextBtn = document.querySelector(".next");
//   prevBtn.addEventListener("click", () => {
//     popularContainer.scrollLeft -= 300;
//   });
//   nextBtn.addEventListener("click", () => {
//     popularContainer.scrollLeft += 300;
//   });
// }
// // Call the function
// sameClassMovies(movie.id);
