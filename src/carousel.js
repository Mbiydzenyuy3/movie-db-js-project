const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWYzNjNmOWY5YTNjNTUzNTE0OWM5MDk3MGZhMjMxMSIsIm5iZiI6MTczMzUxMDAxOS40MTYsInN1YiI6IjY3NTM0MzgzODcxYTQyYzljMjQ1NDFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FgU6EplfTnUB-e6GZZfUI7lO0Ad71oYwG54qzjXpozo",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  options
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const firstSection = document.getElementById("swiper-wrapper-2");
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
      img.className = "movie-poster-one";
      slide.appendChild(img);
      const movieTitle = document.createElement("h4");
      movieTitle.className = "movie-title";
      movieTitle.textContent = movie.title;
      slide.appendChild(movieTitle);

      const movieParagraph = document.createElement("p");
      movieParagraph.className = "movie-paragraph";
      movieParagraph.textContent = movie.paragraph;
      movieParagraph.innerHTML = `&#11088; ${movie.vote_average} | Mystery - Movies `;
      slide.appendChild(movieParagraph);
    }
  })
  .then(() => {
    const swiper = new Swiper("#watch-list", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  })
  .catch((err) => console.error(err));

// async function fetchMovies() {
//   try {
//     const response = await fetch(URL);
//     const data = await response.json();
//     displayMovies(data.results);
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching movies:", error);
//   }
// }

// function displayMovies(movies) {
//   const movieContainer = document.getElementById("swiper-wrapper-2");
//   if (!movieContainer) throw new Error("No movie container");

//   movieContainer.innerHTML = "";
//   movies.forEach((movie) => {
//     const slide = document.createElement("div");
//     slide.className = " watch-movies swiper-slide";
//     movieContainer.appendChild(slide);
//     //     const cardDetail = document.createElement("div");
//     //     cardDetail.className = "movie-details";
//     //     slide.appendChild(cardDetail);

//     const moviePoster = document.createElement("img");
//     moviePoster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
//     moviePoster.alt = movie.title;
//     moviePoster.className = "movie-poster";
//     slide.appendChild(moviePoster);

//     const movieTitle = document.createElement("h4");
//     movieTitle.className = "watch-list-movie-title";
//     movieTitle.textContent = movie.title;
//     slide.appendChild(movieTitle);

//     const movieParagraph = document.createElement("p");
//     movieParagraph.className = "movie-paragraph";
//     movieParagraph.textContent = movie.paragraph;
//     movieParagraph.innerHTML = `&#11088; ${movie.vote_average} | Action - Movies`;
//     slide.appendChild(movieParagraph);
//   });
// }

// fetchMovies();

// const swiper = new Swiper("#watch-list", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
