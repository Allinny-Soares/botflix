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

function updateSearchButton() {
    const hasText = moodInput.value.trim().length > 0;
    searchButton.disabled = !hasText;
}

async function handleSearch() {
    const mood = moodInput.value.trim();

    if (!mood) {
        alert('Por favor, descreva o que você quer assistir!');
        return;
    }

  const originalText = searchButton.innerHTML;
    searchButton.innerHTML = '<span style="animation: pulse 1s infinite;">🔍 Buscando...</span>';
    searchButton.disabled = true;

    const prompt = JSON.stringify({ userPrompt: mood });

    try {
        // Fazer POST para o webhook do N8N
        const response = await fetch('https://allinnyjanne.app.n8n.cloud/webhook-test/botflix', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: prompt
        });