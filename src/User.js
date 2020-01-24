import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import {fetchUsers, addUser} from "./actions/userActions";
import { useForm } from 'react-hook-form';
import useDocumentTitle from "./hooks/useDocumentTitle";
import { TextField } from '@material-ui/core';

function Users() {
    const [data, setData] = useState('');
    const user = useSelector(state => state.user)
    let title = user.users.length > 0 ? user.users[0].email : 'user title'
    useDocumentTitle(title)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const fetchData = async () => {
        const result = await axios.get('http://127.0.0.1:8007/api/users', {
            headers: {
                "Authorization": "Token c2daaaff83141f62378efcd1330f9f0ab2c172a3",
            }
        })
        setData(result.data)
    }

    const handleClick = () => {
        dispatch(fetchUsers())
    }

    const handleAdd = () => {
        let data = {
            name: 'hasan hasibul'
        }
        dispatch(addUser(data))
    }

    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div>
            {user.users.length > 0 &&
                <div>
                    <h1>
                        Email: {user.users[0].email}
                    </h1>
                    <h2>
                        Name: {user.users[0].name}
                    </h2>
                </div>
            }
            <UserList users={user.users}></UserList>

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField name="email" ref={register({ required: true })} /> {/* register an input */}
                {errors.email && 'Email is required.'}

                <TextField name="name" ref={register({ required: true })} />
                {errors.name && 'Name is required.'}

                <input type="submit" />
            </form>

            <Button variant="contained" color="primary" onClick={handleClick}>
                Fetch Users
            </Button>
            <Button variant="contained" color="primary" onClick={handleAdd}>
                Add User
            </Button>
        </div>
    );
}

function List({list}) {
    if (!list) {
        return null;
    }
    return (
        <ul>
            {list.map(item => (
                <Item key={item.id} item={item}/>
            ))}
        </ul>
    )
}
function Item({item}) {
    return (
        <li key={item.email.toString()}>
            {item.email}
        </li>
    )
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

function UserList({users}) {
    if (!users) {
        return null
    }
    const listItems = users.map(user => <li key={user.id}>{user.email}</li>)
    return (
        <ul>{listItems}</ul>
    )
}


export default Users