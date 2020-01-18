import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import {fetchUsers} from "./actions/userActions";

function Users() {
    const [data, setData] = useState('');
    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const result = await axios.get('http://127.0.0.1:8007/api/users', {
            headers: {
                "Authorization": "Token 36e8a40f74f5919522995bc91caeb898875a743c",
            }
        })
        setData(result.data)
    }

    const handleClick = () => {
        dispatch(fetchUsers())
    }


    return (
        <div>
            <h1>Users count: {data.count}</h1>
            <h2>Name: {user.users[0].email}</h2>
            {data.results ? (
                <h1>{data.results[0].email}</h1>
            ) : (
                <h1>Data is not Available</h1>
            )}
            <Button variant="contained" color="primary" onClick={handleClick}>
                Add User
            </Button>
        </div>
    );
}

export default Users