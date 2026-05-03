const moodInput = document.getElementById('mood-input');
const searchButton = document.getElementById('search-button');

document.addEventListener('DOMContentLoaded', function () {
    setupEventListeners();
    updateSearchButton();
});