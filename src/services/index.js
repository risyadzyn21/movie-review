import axios from "axios";

export const getAllComment = () => {
  return axios.get('https://movieapp-glints.herokuapp.com/api/v1/reviews/share/22')
}
