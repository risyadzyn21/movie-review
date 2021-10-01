import { getAllComment } from "../../services";

export const getCommentAsync = () => {
    return (dispatch,getState) => {
        dispatch({type: 'comments/get-start'});
        getAllComment()
        .then((response) => {
            console.log(response);
            dispatch(getCommentSuccess(response.data));
        })
        .catch((error) => {
            console.log(error);
            dispatch(getCommentFailed(error.message));
        });
    }
};

export const getCommentSuccess = (comments) => ({
    type: 'comments/get-succsess',
    payload: {
        comments
    }
});

export const getCommentFailed = (error) => ({
    type : 'comments/get-failed',
    payload: {
        error
    }
});

export const arrInput = (obj) => ({
    type: 'arr/input',
    payload: {obj}
   
  })
  
  export const arrComplete = (param) => ({
    type: 'arr/complete',
    payload: {param}
  })
  
  export const arrDelete = (param) => ({
    type: 'arr/delete',
    payload: {param}
  })
  