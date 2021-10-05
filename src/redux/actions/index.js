import { register, login, getAllComment } from "../../services";

export const getRegisterAsync = (email, password, fullName) => {
  return async (dispatch) => {
    dispatch({ type: "register/get-start" });
    try {
      const response = await register(email, password, fullName)
      console.log(response, "start")
      if (response.data) {
        dispatch(getRegisterSuccess(response.data));
      }
      return response
    } catch (error) {
      console.log(error);
      dispatch(getRegisterFailed(error.message));
      return error
    }
  }
};

export const getRegisterSuccess = (register) => ({
  type: "register/get-success",
  payload: {
    register,
  },
});

export const getRegisterFailed = (error) => ({
  type: "register/get-failed",
  payload: {
    error,
  },
});

export const getLoginAsync = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: "login/get-start" });
    try {
      const response = await login(email, password)
      console.log(response, "start")
      if (response.data) {
        dispatch(getLoginSuccess(response.data));
        localStorage.setItem('token', response.data.data)
      }
      return response
    } catch (error) {
      console.log(error);
      dispatch(getLoginFailed(error.message));
      return error
    }
  }
};

export const getLoginSuccess = (login) => ({
  type: "login/get-success",
  payload: {
    login,
  },
});

export const getLoginFailed = (error) => ({
  type: "login/get-failed",
  payload: {
    error,
  },
});

export const getCommentAsync = () => {
  return (dispatch, getState) => {
    dispatch({ type: "comments/get-start" });
    getAllComment()
      .then((response) => {
        console.log(response);
        dispatch(getCommentSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getCommentFailed(error.message));
      });
  };
};

export const getCommentSuccess = (comments) => ({
  type: "comments/get-succsess",
  payload: {
    comments,
  },
});

export const getCommentFailed = (error) => ({
  type: "comments/get-failed",
  payload: {
    error,
  },
});

export const arrInput = (obj) => ({
  type: "arr/input",
  payload: { obj },
});

export const arrComplete = (param) => ({
  type: "arr/complete",
  payload: { param },
});

export const arrDelete = (param) => ({
  type: "arr/delete",
  payload: { param },
});
