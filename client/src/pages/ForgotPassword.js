import React, { useState } from 'react';
import ErrorBoundary from '../helper classes/ErrorBoundary';
import './ForgotPassword.css';

const initialState = {
    email: "",
};

const  ForgotPassword = ()=> {
    const [state, setState] = useState(initialState);
    const {email} = state;

    const handleInputChange = (e)=> {
        const {name, value} = e.target();
        setState({...state, [name] : value });
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
    };
 
  return (

    <div className='mainDiv'>
        <form id='forgotPasswordForm'
              onSubmit={ handleSubmit }
        >
            <ErrorBoundary fallback="error occured">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email || ""}
              onChange={handleInputChange}
            />
            </ErrorBoundary>

            <ErrorBoundary fallback="error occurred">
            <input type="submit" value="Submit" id="submit"/>
            </ErrorBoundary>
        </form>
    </div>
  )
}

export default ForgotPassword;