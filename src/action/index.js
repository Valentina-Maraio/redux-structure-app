import axios from 'axios';

export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
}
export const RANDOM = "RANDOM";
export const RANDOM_SUCCESS = "RANDOM_SUCCESS";
export const RANDOM_ERROR = "RANDOM_ERROR"

export const random = () => async dispatch => {
    await dispatch({ type: RANDOM });
    try {
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`
        );
        return dispatch({
            type: RANDOM_SUCCESS,
            data: response.data
        });
    } catch(error){
        return dispatch({ type: RANDOM_ERROR, error });
    }
} ;