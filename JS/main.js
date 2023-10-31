
const movieList = [{
    name: 'Homem Aranha',
    genre: 'Aventura',
    image: 'https://legadodamarvel.com.br/wp-content/uploads/2021/12/Homem-Aranha-Atraves-do-Aranhaverso-poster-legadodamarvel.jpg'
}]

const addMovie = () => {
    const nameInput = document.getElementById('name').value
    const genreInput = document.getElementById('genre').value
    const imageInput = document.getElementById('url').value
    movieList.push({
        name: nameInput,
        genre: genreInput,
        image: imageInput
    })
    document.getElementById('name').value = ''
    document.getElementById('genre').value = ''
    document.getElementById('url').value = ''
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
    document.getElementById('name').value = ''
}

const search = () => {
    document.getElementById('movies').innerHTML = ''
    const searchName = document.getElementById('name').value
    const searchGenre = document.getElementById('genre').value
    movieList.map((movie, index) => {
        if((movie.name.includes(searchName) && searchName != '') || (movie.genre.includes(searchGenre) && searchGenre != '')){
            document.getElementById('movies').innerHTML += `
            <div class="card movie">
                <img src="${movie.image}" alt="Cartaz">
                <div class="cardText">
                    <h3 class="movieTitle">${movie.name}</h3>
                    <h4 class="movieGenre">${movie.genre}</h4>
                </div>
            </div>`
        }
    })
    document.getElementById('name').value = ''
    document.getElementById('genre').value = ''
}
