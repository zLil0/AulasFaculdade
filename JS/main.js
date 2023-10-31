
const movieList = []

const addMovie = () => {
    const nameInput = document.getElementById('name').value
    const genreInput = document.getElementById('genre').value
    const imageInput = document.getElementById('url').value
    movieList.push({
        name: nameInput,
        genre: genreInput,
        image: imageInput
    })
}

const showMovies = () => {
    document.getElementById('movies').innerHTML = ''
    movieList.map((movie) =>{
        document.getElementById('movies').innerHTML += `
        <div class="card movie">
                <img src="${movie.image}" alt="Cartaz">
                <div class="cardText">
                    <h3 class="movieTitle">${movie.name}</h3>
                    <h4 class="movieGenre">${movie.genre}</h4>
                </div>
            </div>`
    })
}

const removeLast = () => {
    movieList.pop()
}

const removeByName = () =>{
    const nameRemoved = document.getElementById('name').value
    movieList.map((movie, index) => {
        if(movie.name === nameRemoved){
            movieList.splice(index, 1)
        }
    })
}
