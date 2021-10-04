import axios from "axios";

export const getAllComment = () => {
  return axios.get('https://movieapp-glints.herokuapp.com/api/v1/reviews/share/22')
}

export function MovieDB(genre) {

  return axios({
    method: 'GET',
    url: `https://movieapp-glints.herokuapp.com/api/v1/movies/page/1`
    // params: {

    //   genre: genre === 'All' ? undefined : genre
    // }
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

export const Login = (email, password, token) => {
  const data = {
    email,
    password
  }
  return axios({
    method: 'POST',
    url: 'https://movieapp-glints.herokuapp.com/api/v1/users/signin',
    headers: {
      'content-type': 'application/json',
      "AUTHORIZATION": `Bearer ${token}`
    },
    data: JSON.stringify(data)
  })
}

