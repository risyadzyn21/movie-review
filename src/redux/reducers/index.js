const token = localStorage.getItem('token') || '';

const initialState = {
  isLoggedIn: false,
  token
}

function userReducer(state = initialState, action) {
  const { type, payload } = action
  switch (action.type) {
    case 'login/get-start':
      return {
        ...state,
        loading: true
      }
    case 'login/get-success':
      return {
        ...state,
        token: action.payload.token,
        loading: false,
        error: ''
      }
    case 'login/get-failed':
      return {
        ...state,
        loading: false,
        error: payload.error
      }
    default:
      return state
  }
}

export default userReducer
