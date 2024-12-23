// Fetch the movie ID from the URL
const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

if (movieId) {
  // Debugging: Ensure the ID is correctly retrieved
  console.log("Movie ID:", movieId);

  const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=4ef363f9f9a3c5535149c90970fa2311&language=en-US`;

  async function fetchMovieDetails() {
    try {
      const response = await fetch(MOVIE_DETAILS_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }

      const movie = await response.json();
      // Debugging: Log the movie data
      console.log("Fetched Movie Data:", movie);

      // Populate the page with movie details
      document.getElementById("title").textContent =
        movie.title || "No Title Available";
      document.getElementById("overview").textContent =
        movie.overview || "No Overview Available";
      document.getElementById("poster").src = `https://image.tmdb.org/t/p/w500${
        movie.poster_path || ""
      }`;
    } catch (error) {
      console.error("Error fetching movie details:", error);
      //       alert("Failed to fetch movie details. Please try again later.");
    }
  }

  fetchMovieDetails();
} else {
  console.error("No movie ID found in URL");
  //   alert("No movie selected. Please go back and select a movie.");
}

const API_KEY = "4ef363f9f9a3c5535149c90970fa2311";
const TOP_RATED_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

async function fetchTopRatedMovies() {
  try {
    // Fetch top-rated movies
    const response = await fetch(TOP_RATED_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const movies = data.results || [];
    console.log("Top-Rated Movies:", movies);

    // Fetch cast for the first movie as an example
    if (movies.length > 0) {
      const firstMovieId = movies[0].id;
      console.log("Fetching cast for movie ID:", firstMovieId);

      const cast = await fetchMovieCast(firstMovieId);
      console.log("Cast for the first movie:", cast);
    } else {
      console.log("No movies found.");
    }
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
  }
}

async function fetchMovieCast(movieId) {
  const MOVIE_CREDITS_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;

  try {
    // Fetch movie credits
    const response = await fetch(MOVIE_CREDITS_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const credits = await response.json();
    return credits.cast || [];
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    return [];
  }
}

// Run the functions
fetchTopRatedMovies();
