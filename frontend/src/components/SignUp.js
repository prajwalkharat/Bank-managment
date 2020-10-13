import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import useStyles from './useStyles/UserFormStyles';

const SignUp = ({ history }) => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });
    const classes = useStyles();

    const handleInputChange  = (e) => {
        const { name , value } = e.target; 
        setState({
            ...state, 
            [name]: value
        });
    }
    const submitForm = async (e) => {
        e.preventDefault();
        // const result = await userService.addUser(state); 
        // console.log(result)
        history.push('/');
    }
    return (
        <div className={classes.formContainer}>
            <form 
            className={classes.form} 
            noValidate autoComplete="off"
            onSubmit={submitForm}
            >
            <fieldset className={classes.root}>
                <TextField
                label="First name"
                name="firstName"
                value={state.firstName}
                onChange={handleInputChange}
                />
                <TextField 
                label="Last name"
                name="lastName"
                value={state.lastName}
                onChange={handleInputChange}
                />
                <TextField 
                label="Email"
                name="email"
                value={state.email}
                onChange={handleInputChange}
                />
                <TextField
                type="password"
                label="Password"
                name="password"
                value={state.password}
                onChange={handleInputChange}
                />
                <TextField
                type="password"
                label="Confirm Password"
                name="confirmPassword"
                value={state.confirmPassword}
                onChange={handleInputChange}
                />
                </fieldset>
                <Button 
                type="submit"
                variant ="contained" 
                color="primary"
                >Signup</Button>
        </form>
    </div>
    );
};

export default SignUp;