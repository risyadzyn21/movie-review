import axios from "axios";

export function MovieDB(genre) {


  return axios({
    method: 'GET',
    url: `https://notflixtv.herokuapp.com/api/v1/movies`,
    params: {

      limit: 15,
      genre: genre == 'All' ? undefined : genre
    }
  })
}

export function MovieGenreDB() {

  return axios({
    method: 'GET',
    url: 'https://notflixtv.herokuapp.com/api/v1/movies/genres'
  })
}
