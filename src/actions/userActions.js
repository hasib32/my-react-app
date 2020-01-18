import {FETCH_USER, ADD_USER} from "./types";
import axios from 'axios'


export const fetchUsers = () => dispatch => {
    const config = {
        headers: {
            "Authorization": "Token 36e8a40f74f5919522995bc91caeb898875a743c",
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
        type: FETCH_USER,
        payload: data
    })
}

