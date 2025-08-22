


const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9679d57903c73a2de4cd4bccb2fba6fa&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=9679d57903c73a2de4cd4bccb2fba6fa&query=';

const main = document.getElementById('section');
const form = document.getElementById('form');
const query = document.getElementById('query');

returnMovies(APILINK);

function returnMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(function(data) {
            // Check if data.results exists and is an array
            if (data.results && Array.isArray(data.results)) {
                main.innerHTML = ''; // Clear previous results
                data.results.forEach(element => {
                    // Check if poster_path is available
                    if (element.poster_path) {
                        const div_card = document.createElement('div');
                        div_card.setAttribute('class', 'card');

                        const div_column = document.createElement('div');
                        div_column.setAttribute('class', 'column');

                        const div_row = document.createElement('div');
                        div_row.setAttribute('class', 'row');

                        const h3 = document.createElement('h3');
                        h3.setAttribute('class', 'title');
                        h3.innerText = element.title;

                        const img = document.createElement('img');
                        img.setAttribute('class', 'thumbnail');
                        img.setAttribute('id', 'image');
                        img.setAttribute('alt', element.title);
                        img.src = IMGPATH + element.poster_path;

                        const center = document.createElement('center');

                        center.appendChild(img);
                        div_card.appendChild(center);
                        div_card.appendChild(h3);
                        div_column.appendChild(div_card);
                        div_row.appendChild(div_column);

                        main.appendChild(div_row);
                    } else {
                        console.warn(`No poster available for movie: ${element.title}`);
                       
                    }
                });
            } else {
                console.error('No movies found or data format has changed.');
              
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
           
        });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = query.value;

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem);
        query.value = '';
    }
});











