import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import useDocumentTitle from "./hooks/useDocumentTitle";


const Server = () => {
    const [count, setCount] = useState(0)
    const increment = () => setCount(count+1)
    let title = `You clicked counter: ${count}`
    useDocumentTitle(title)

    return(
        <>
            <h1>Server List Page</h1>
            <h2>Number of counts: {count}</h2>
            <Button onClick={increment} variant="contained" color={"primary"}>Increase Counter</Button>
        </>
    )
}
export default Server