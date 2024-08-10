const searchMovies = () => {
    const searchInput = document.getElementById('searchInput').value;
    fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=63a89678`)
        .then((response) => response.json())
        .then((data) => {
            const resultContainer = document.getElementById('result');
            resultContainer.innerHTML = '';
            if (data.Response === "True") { 
                resultContainer.innerHTML = data.Search.map(movie => {
                    return `<div class="movie-card">
                        <img src="${movie.Poster}" alt="${movie.Title}">
                        <h2>${movie.Title}</h2>
                        <p>${movie.Year}</p>
                        <button onclick="addToFavorits">Add to favorits</button>
                    </div>`;
                }).join('');
            } else {
                resultContainer.innerHTML = '<p>No results found</p>';
            }
        })
};

document.getElementById('search').addEventListener('click', searchMovies);

//add favorits movies iñto my local server 
const addToFavorits = (movie) => {
    fetch('http://localhost:3000/favorits', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        }
    )
}

//display all favorits when click on favorit putton
const showFavorits = () => {
    fetch('http://localhost:3000/favorits')
        .then((response) => response.json())
        .then((data) => {
            const resultContainer = document.getElementById('result');
            resultContainer.innerHTML = '';
            if (data.length > 0) {
                resultContainer.innerHTML = data.map(movie => {
                    return `<div class="movie-card">
                        <img src="${movie.Poster}" alt="${movie.Title}">
                        <h2>${movie.Title}</h2>
                        <p>${movie.Year}</p>
                    </div>`;
                }).join('');
            } else {
                resultContainer.innerHTML = '<p>No favorits found</p>';
            }
        })
};