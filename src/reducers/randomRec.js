import {
    RANDOM,
    RANDOM_SUCCESS,
    RANDOM_ERROR
} from '../action/index';

const randomRec = (state = {}, action) => {
    switch(action.type){
        case RANDOM:
            return{
                ...state,
                isLoading: true
            };
        case RANDOM_SUCCESS:
        return {
            ...state,
                data: action.data,
                isLoading: false
        };
        case RANDOM_ERROR:
            return {
                    error: action.error,
                    isLoading: false
            };
        default:
            return state;
    }
}

export default randomRec;