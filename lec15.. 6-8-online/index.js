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

//add to favorits function
// const addToFavorits = (movie) => {
//     const favorits = JSON.parse(localStorage.getItem('favorits')) || [];
//     favorits.push(movie);
//     localStorage.setItem('favorits', JSON.stringify(favorits));
// };

// //display favorits
// const displayFavorits = () => {
//     const favorits = JSON.parse(localStorage.getItem('favorits')) || [];
//     const resultContainer = document.getElementById('result');
//     resultContainer.innerHTML = '';
//     resultContainer.innerHTML = favorits.map(movie => {
//         return `<div class="movie-card">
//             <img src="${movie.Poster}" alt="${movie.Title}">
//             <h2>${movie.Title}</h2>
//             <p>${movie.Year}</p>
//         </div>`;
//     }).join('');
// };
