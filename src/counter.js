// export function setupCounter(element) {
//   let counter = 0;
//   const setCounter = (count) => {
//     counter = count;
//     element.innerHTML = `count is ${counter}`;
//   };
//   element.addEventListener("click", () => setCounter(counter + 1));
//   setCounter(0);
// }

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWYzNjNmOWY5YTNjNTUzNTE0OWM5MDk3MGZhMjMxMSIsIm5iZiI6MTczMzUxMDAxOS40MTYsInN1YiI6IjY3NTM0MzgzODcxYTQyYzljMjQ1NDFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FgU6EplfTnUB-e6GZZfUI7lO0Ad71oYwG54qzjXpozo",
  },
};

fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", options)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const heroSection = document.getElementById("swiper-wrapper-hero");
    for (let index = 0; index < 4; index++) {
      const movie = data.results[index];
      const posterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image+Available";
      const slide = document.createElement("div");
      slide.className = "hero-movies-bg swiper-slide";
      heroSection.appendChild(slide);
      const img = document.createElement("img");
      img.src = posterPath;
      img.alt = movie.title;
      img.className = "hero-movie-poster";
      slide.appendChild(img);
      const movieTitle = document.createElement("h2");
      movieTitle.className = "hero-movie-title";
      movieTitle.textContent = movie.title;
      slide.appendChild(movieTitle);

      const movieParagraph = document.createElement("p");
      movieParagraph.className = "hero-movie-paragraph";
      movieParagraph.textContent = movie.paragraph;
      slide.appendChild(movieParagraph);
    }
  })
  .then(() => {
    const swiper = new Swiper("#hero-section", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // const heroSection = document.getElementById("hero-section");
    // const heroContent = document.getElementById("hero-content");
    // const paragraphText = document.querySelector(".heading-paragraph");
    // const buttonDiv = document.querySelector(".cta");
    // for (let index = 0; index < data.results.length; index++) {
    //   const movie = data.results[index];
    //   const posterPath = movie.poster_path
    //     ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    //     : "https://via.placeholder.com/500x750?text=No+Image+Available";

    //   const img = document.createElement("img");
    //   img.src = posterPath;
    //   img.alt = movie.title;
    //   img.className = "hero-movie-images";
    //   heroSection.appendChild(img);
    //   const movieTitle = document.createElement("h4");
    //   movieTitle.className = "hero-movie-title";
    //   movieTitle.textContent = movie.title;
    //   heroContent.appendChild(movieTitle);
    //   paragraphText.textContent = movie.paragraph;
    //   buttonDiv.innerHTML = `<button class="primary-cta">
    //   <img src="/assets/img/play.png" alt="buttonplay icon">
    //   <span>Play now</span>
    //   </button>
    //   <button class="secondary-cta">
    //     <span> Watch trailer</span>
    //    </button>
    //    < href="watch-list">
    //   <button class="outline-cta">
    //      <img src="/assets/img/bookmark.png"  play icon">
    //      <span>Add watchlist</span>
    //      </button>
    //   `;
    //   heroContent.appendChild(buttonDiv);
    // }
  })
  .catch((err) => console.error(err));
