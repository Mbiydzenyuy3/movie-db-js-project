// document.addEventListener("DOMContentLoaded", async () => {
//   const movieData = localStorage.getItem("selectedMovie");

//   if (!movieData) {
//     console.error("No movie data found in localStorage.");
//     return;
//   }

//   const movie = JSON.parse(movieData); // Parse the stored movie data
//   displayMovieDetails(movie);

//   // Fetch and display the cast
//   await fetchAndDisplayCast(movie.id);
// });

// function displayMovieDetails(movie) {
//   const heroSection = document.querySelector(".hero");

//   if (!heroSection) {
//     console.error("Hero section not found in the DOM.");
//     return;
//   }

//   heroSection.innerHTML = `
//     <div class="movie-poster" style="background-image: url(//image.tmdb.org/t/p/original${
//       movie.poster_path || "path/to/fallback-image.jpg"
//     });"></div>
//     <div class="movie-details">
//       <h1>${movie.title || movie.name}</h1>
//       <p>${movie.overview || "No overview available."}</p>
//       <div class="additional-info">
//         <span>Release Date: ${movie.release_date || "N/A"}</span>
//         <span>Rating: ${movie.vote_average || "N/A"}</span>
//       </div>
//     </div>
//   `;
// }

// async function fetchAndDisplayCast(movieId) {
//   const castContainer = document.querySelector(".cast");

//   if (!castContainer) {
//     console.error("Cast container not found in the DOM.");
//     return;
//   }

//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=YOUR_API_KEY`
//     );
//     const data = await response.json();

//     if (data.cast && data.cast.length > 0) {
//       const castHTML = data.cast
//         .slice(0, 10) // Limit to 10 cast members
//         .map(
//           (actor) => `
//         <div class="cast-member">
//           <img src="https://image.tmdb.org/t/p/w200${actor.profile_path}" alt="${actor.name}">
//           <p>${actor.name} as ${actor.character}</p>
//         </div>
//       `
//         )
//         .join("");

//       castContainer.innerHTML = `<h2>Cast</h2>${castHTML}`;
//     } else {
//       castContainer.innerHTML = "<p>No cast information available.</p>";
//     }
//   } catch (error) {
//     console.error("Failed to fetch cast information:", error);
//   }
// }
