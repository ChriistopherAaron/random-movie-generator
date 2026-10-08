// 1. Create an empty array to store movie titles
const movies = [];

// 2. Select DOM elements using document.getElementById()
const movieInput = document.getElementById('movieInput');
const addBtn = document.getElementById('addBtn');
const movieList = document.getElementById('movieList');
const pickBtn = document.getElementById('pickBtn');
const winnerDisplay = document.getElementById('winnerDisplay');

// Add movies to the array & list
addBtn.addEventListener('click', () => {
    const movieTitle = movieInput.value.trim();

    if (movieTitle !== '') {
        // Add to our array
        movies.push(movieTitle);

        // Create a new list item for the DOM
        const li = document.createElement('li');
        li.textContent = movieTitle;
        movieList.appendChild(li);

        // Clear the input field
        movieInput.value = '';
    }
});

// Pick a Random Movie from the array
pickBtn.addEventListener('click', () => {
    // Check if there are any movies in the array first
    if (movies.length === 0) {
        winnerDisplay.textContent = 'Please add at least one movie first!';
        return;
    }

    // Generate a random index based on array length
    const randomIndex = Math.floor(Math.random() * movies.length);
    const selectedMovie = movies[randomIndex];

    // Display the winning movie
    winnerDisplay.textContent = `🎬 ${selectedMovie}!`;
});