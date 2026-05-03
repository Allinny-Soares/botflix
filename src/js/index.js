const moodInput = document.getElementById('mood-input');
const searchButton = document.getElementById('search-button');

document.addEventListener('DOMContentLoaded', function () {
    setupEventListeners();
    updateSearchButton();
});

function setupEventListeners() {
    // Input change listener
    moodInput.addEventListener('input', function () {
        updateSearchButton();
    });

     moodInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!searchButton.disabled) {
                handleSearch();
            }
        }
    });

     searchButton.addEventListener('click', handleSearch);
}
