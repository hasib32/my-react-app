import {FETCH_USER, ADD_USER} from "./types";
import axios from 'axios'


export const fetchUsers = () => dispatch => {
    const config = {
        headers: {
            "Authorization": "Token c2daaaff83141f62378efcd1330f9f0ab2c172a3",
        }
    }
    axios.get('http://127.0.0.1:8007/api/users',config)
        .then(response => response.data.results)
        .then(users => dispatch({
            type: FETCH_USER,
            payload: users
        }))
}

export const addUser = data => dispatch => {
    dispatch({
        type: ADD_USER,
        payload: data
    })
}

