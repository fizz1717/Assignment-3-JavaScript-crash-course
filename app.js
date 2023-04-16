// IIFE Immediately invoked function Expressions
(async function () {
    const response = await fetch("./data.json");
    const data = await response.json();
    const inputElem = document.getElementById("searchInput");
    const btnElem = document.getElementById("searchBtn");
    const listElem = document.getElementById("movie-list");
    const detailsElem = document.getElementById("movieDetailsContainer");
    function loadMovieDetails(movie) {
      detailsElem.innerHTML = `
          <h2 class="title">${movie.title}</h2>
          <h3>Genres:</h3>
          <ul>${movie.genres.map(function (genres) {
            return "<li>" + genres + "</li>"
          }).join("")}</ul>
          <h3>Genres:</h3>
          <div>${movie.genres}</div>
      `;
    }
    function displaySearchResults (results) {
      listElem.innerHTML = "";
      results.forEach(function (movie) {
        const li = document.createElement("li");
        const listItem = `
            <h2 class="title">${movie.title}</h2>
            <div class="description">${movie.description}</div>
        `;
        li.innerHTML = listItem;
        li.addEventListener("click", function () {
          loadMovieDetails(movie);
        });
        listElem.appendChild(li);
      })
    }
    function search() {
      const query = inputElem.value.toLowerCase();
      const results = movie.filter(function (movie) {
        return (movie.title.toLowerCase().includes(query) ||
        movie.genres.join(" ").toLowerCase().includes(query))
      });
      displaySearchResults(results);
    }
    btnElem.addEventListener("click", search);
  })();