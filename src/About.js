import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";

function About() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('hasan')
    useEffect(function hello() {
        console.log('hello')
    },[])
    useEffect( () => {
        document.title = `Count: ${count}`
    }, [count])

    const handleCount = () => {
        setCount(count + 1)
    }

    const counter = useSelector(state => state.counter);

    return(
        <div>
            <h1>Hello from About Page</h1>
            <h3>Count: {count}</h3>
            <h4>Counter with redux: {counter.count}</h4>
            <Counter onCount={handleCount} name={name}/>
        </div>
    )
}

export default About

const Counter = ({name, onCount}) => {
    const dispatch = useDispatch();

    return (
        <>
            <h4>{name}</h4>
            <button onClick={onCount}>Increase Count</button>
            <button onClick={() => dispatch({type: 'increment'})}>Redux counter</button>
        </>
    )
}