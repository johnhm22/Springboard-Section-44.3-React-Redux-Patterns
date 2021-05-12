import data from './data.json';


const INITIAL_STATE = [data];

function shopReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;