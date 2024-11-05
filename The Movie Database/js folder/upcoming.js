'use strict'

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmQ0NWE1MGEwNzYxNTM4YmZlZDdmNjY0Y2FjYjRkNyIsIm5iZiI6MTcyNzU0ODI2NC45MjUyMTMsInN1YiI6IjY2Zjc5YzRjMWE5YzkxODhmZWNiZmEyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3QnSIM2Z-K-tgJJd5O9GjZqg8_PWXyZiUyLS7AgZzac'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        if (response.results) {
          console.log(response.results);
          showNowPlaying(response.results); // Pass the movie data to the function
        } else {
          console.error("No movie data found");
        }
      })
  

  function showNowPlaying(movies) {
    // Selecting all elements from the DOM with the class 'showMovies'
    const showMoviesElements = document.querySelectorAll('.showMovies');
    
    // Creating HTML content for each movie
    const movieList = movies.map(movie => {
      const imageUrl = movie.poster_path
          ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` // Full URL for the poster image
          : 'https://via.placeholder.com/500x750?text=No+Image'; // Placeholder image if no poster exists
  
      return `
        <article class="movie">
          <header class="movie-heading">
            <h3 class="movie-title">${movie.title}</h3>
          </header>
          <section class="movie-content">
            <div class="movie-img">
              <img src="${imageUrl}" alt="${movie.original_title}" class="movie-poster"/>
            </div>
            <section class="movie-description">
              <p>${movie.overview}</p>
              <p class="movie-title"><strong>Original Title:</strong> ${movie.original_title}</p>
              <p><strong>Release Date:</strong> ${movie.release_date}</p>
            </section>
          </section>
        </article>
      `;
    }).join(''); // Join the array to create a string of HTML content
  
    // Inject the movie list into each element with class 'showMovies'
    showMoviesElements.forEach(showMovies => {
      showMovies.innerHTML = movieList; // Assign the HTML content to each element
    });
  }
  


    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Get the current page's filename from the URL
    const currentPage = window.location.pathname.split("/").pop();

    // Loop through the navigation links
    navLinks.forEach(link => {
        // If the link's href matches the current page's filename, add the 'active' class
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });