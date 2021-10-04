import axios from "axios";

export const register = (email,password,fullName) => {
  const data = {
    email,
    password,
    fullName
  }
  
  const url = 'https://movieapp-glints.herokuapp.com/api/v1/users/signup';
  return axios({
    method: 'POST',
    url,
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  });
}

export const login = (email,password) => {
  const data = {
    email,
    password
  }
  
  const url = 'https://movieapp-glints.herokuapp.com/api/v1/users/signin';
  return axios({
    method: 'POST',
    url,
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  });
}

export const getAllComment = () => {
  return axios.get('https://movieapp-glints.herokuapp.com/api/v1/reviews/share/22')
}

export function MovieDB(genre) {

  return axios({
    method: 'GET',
    url: `https://notflixtv.herokuapp.com/api/v1/movies`,
    params: {

      limit: 15,
      genre: genre === 'All' ? undefined : genre
    }
  })
}

export function MovieDBId(id) {

  return axios({
    method: 'GET',
    url: `https://notflixtv.herokuapp.com/api/v1/movies/${id}`
  })
}

export function MovieGenreDB() {

  return axios({
    method: 'GET',
    url: 'https://notflixtv.herokuapp.com/api/v1/movies/genres'
  })
}
