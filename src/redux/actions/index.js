import { Login } from "../../services";

export const getLoginAsync = (email, password) => {
  return (dispatch, getState) => {
    dispatch({ type: 'login/get-start' })
    Login(email, password)
      .then((response) => {
        dispatch(getLoginSuccess(response.data.data))
        localStorage.setItem('token', response.data.data);
      })
  }
}

export const getLoginSuccess = (login) => ({
  type: 'login/get-success',
  payload: {
    login
  }
})

export const getLoginFailed = (error) => ({
  type: 'login/get-failed',
  payload: {
    error
  }
})
