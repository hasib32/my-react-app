import {FETCH_USER, ADD_USER} from "../actions/types";

const initialState = {
    user: {
        name: 'hasan'
    },
    users: [],
    isFetching: false,
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                users: action.payload
            };
        case ADD_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state
    }
}