import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}))

function SignIn() {
    const classes = useStyles()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function handleSubmit (e) {
        e.preventDefault()
        console.log(name, email)
    }

    function updateName(value) {
        setName(value)
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="name" name="name" value={name} label="Name" onChange={e => updateName(e.target.value)}></TextField>
            <TextField id="email" name="email" value={email} label="Email" onChange={e => setEmail(e.target.value)}></TextField>
           <div>
               <Button variant="contained" color="primary" onClick={handleSubmit}>
                   Submit
               </Button>
           </div>
        </form>
    )
}

export default SignIn