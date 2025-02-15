document.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('category');
    const btn = document.getElementById('start');
    const jokeDiv = document.getElementById('Joke');

    fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => {
            if (!response.ok) throw new Error('Error');
            return response.json();
        })
        .then(categories => {
            while (categorySelect.options.length > 1) {
                categorySelect.remove(1);
            }
            
            categories.forEach(cat => {
                const option = new Option(
                    cat.charAt(0).toUpperCase() + cat.slice(1), 
                    cat 
                );
                categorySelect.add(option);
            });
        })
        .catch(error => {
            jokeDiv.innerHTML = 'Errore nel caricamento delle categorie';
        });

    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const selectedCat = categorySelect.value;
        const url = selectedCat === 'Nessuna categoria' 
            ? 'https://api.chucknorris.io/jokes/random' 
            : `https://api.chucknorris.io/jokes/random?category=${selectedCat}`;

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('Joke non trovato');
                return response.json();
            })
            .then(data => {
                jokeDiv.innerHTML = data.value;
            })
            .catch(error => {
                console.error('Errore:', error);
                jokeDiv.innerHTML = 'Errore nel caricamento della battuta';
            });
    });
});