const initialStatte = {
    comments: [],
    loading: false,
    error: ''
}

function commentReducer(state = initialStatte, action) {
    const { type,payload } = action;
    switch(type) {
        case 'comments/get-start':
            return {
                ...state,
                loading:true
            }
            case 'comments/get-success':
            return {
                ...state,
                comments: payload.comments,
                loading:false,
                error: ''
            }
            default:
                return state;
    }
}

export default commentReducer;