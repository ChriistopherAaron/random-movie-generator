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

        // Create the list item wrapper
        const li = document.createElement('li');

        // Create text span for movie titles
        const titleSpan = document.createElement('span');
        titleSpan.textContent = movieTitle;

        // Create the delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.classList.add('delete-btn');

        // Add delete button click logic
        deleteBtn.addEventListener('click', () => {
            // Remove from array
            const index = movies.indexOf(movieTitle);
            if (index > -1) {
                movies.splice(index, 1);
            }

            // Remove <li> from DOM
            li.remove();
        });

        // Assemble and append list
        li.appendChild(titleSpan);
        li.appendChild(deleteBtn);
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