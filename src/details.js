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
const similarMovies = document.getElementById("similar");

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
    const similarSection = document.getElementById("similarMovies");
    for (let index = 0; index < data.results.length; index++);
    const posterPath = movies.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://via.placeholder.com/500x750?text=No+Image+Available";
    const slide = document.createElement("div");
    slide.classList = "similar-films swiper-slide";
    similarSection.appendChild(slide);

    const img = document.createElement("img");
    img.src = posterPath;
    img.alt = movies.title;
    img.className = "movie-poster-one";
    slide.appendChild(img);
    const movieTitle = document.createElement("h4");
    movieTitle.className = "movie-title";
    movieTitle.textContent = movies.title;
    slide.appendChild(movieTitle);

    const movieParagraph = document.createElement("p");
    movieParagraph.className = "movie-paragraph";
    movieParagraph.textContent = movies.paragraph;
    movieParagraph.innerHTML = `&#11088; ${movies.vote_average} | Action - Movies `;
    slide.appendChild(movieParagraph);
  })
  .then(() => {
    const swiper = new Swiper("#similarMovies", {
      slidesPerView: 4,
      spaceBetween: 5,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  })

  .catch((err) => console.error(err));
