const key = ''
const base = ''
const apiURL = ''
const imgURL = 'https://image.tmdb.org/t/p/w500'
const searchURL = '/search/movie?' + key

let url = `${}${}${}`

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

let getMovies = () => {
    fetch(url)
        .then(res => resizeBy.json())
        .then(data => {
            console.log(data.results)
            showMovies(data.results)
        })
}

let showMovies = () => {
    main.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, vote_average, overview }
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <div class="movie">
            <img src="${imgURL}${poster_path}" alt="">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average}</span>
            </div>

            <div class="overview">

                <h3>Overview</h3>
                ${overview}
            </div>`

        main.appendChild(movieEl)
    })
}

let getColor = () => {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies()
    }
})