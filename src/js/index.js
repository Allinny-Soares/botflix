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
