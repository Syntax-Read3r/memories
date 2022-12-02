import * as api from '../api/index.js';

// Action Creators
// Action Creators are functions that return actions

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPost();

        const action = { type: 'FETCH_ALL', payload: data };
        
        dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
}