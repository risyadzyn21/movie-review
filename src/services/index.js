import axios from "axios";

export const getAllComment = () => {
  return axios.get('https://movieapp-glints.herokuapp.com/api/v1/reviews/share/22')
}

export function MovieDB(page) {

  return axios({
    method: 'GET',
    url: `https://movieapp-glints.herokuapp.com/api/v1/movies/page/1`
    // params: {

    //   genre: genre === 'All' ? undefined : genre
    // }
  })
}

export function MovieDBGenre(genre) {
  return axios({
    method: 'GET',
    url: `https://movieapp-glints.herokuapp.com/api/v1/movies/${genre}/page/1`
  })
}


export function MovieDBId(id) {

  return axios({
    method: 'GET',
    url: `https://movieapp-glints.herokuapp.com/api/v1/movies/${id}`
  })
}

export function MovieDBChara() {

  return axios({
    method: 'GET',
    url: 'https://movieapp-glints.herokuapp.com/api/v1/characters'
  })
}

export function MovieGenreDB() {

  return axios({
    method: 'GET',
    url: 'https://movieapp-glints.herokuapp.com/api/v1/categories'
  })
}

export function MovieSearch(title) {

  return axios({
    method: 'GET',
    url: `https://movieapp-glints.herokuapp.com/api/v1/movies/search/${title}`
  })
}

