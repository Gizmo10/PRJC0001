import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
/*import axios from "axios";*/
import './PatientLogin.css';
import ErrorBoundary from './ErrorBoundary';

const initialState = {
    id: "",
    password: "",
};

const PatientLogin = () => {

    const [state, setState] = useState(initialState);
    const {id, password} = state;
    const navigate = useNavigate();

    const id_pattern = /^[0-9]{1}([0-9]{12})$/;
    const password_pattern = /^[A-Z | a-z | 0-9]{1}([A-Z | a-z | 0-9]{5,8})$/

    const validateId = () => {

      return  id_pattern.test(id);
    };

    const validatePassword = () => {

      return password_pattern.test(password);
    };

    const validateUserLogin = ()=> {

      if(validateId() && validatePassword()) {

      }
    };

    const handleInputChange = (e) => {
        const { name, value} = e.target;
        setState({...state, [name] : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        (!id || !password) ?
          toast.error("One of the fields is missing a value.") : toast.success("correct input");

    };

  return (
    <div className = "mainDiv">
      <form 
            onSubmit = { handleSubmit }
      >
        <ErrorBoundary fallback="error occured">
        <label htmlFor="id">Id Number: </label>
        <input
          type="text"
          id="id"
          name="id"
          placeholder="Enter valid ID number..."
          value={id || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

       <ErrorBoundary fallback="error occured">
       <label htmlFor="password">Password: </label>
        <input
        type = "text"
        id = "password"
        name = "password"
        placeholder = "Enter password..."
        value = {password || ""}
        onChange = {handleInputChange}
        />
       </ErrorBoundary>
      
      <ErrorBoundary fallback="error occurred">
        <input type="submit" value="Login" id="Login"/>
      </ErrorBoundary>

      <ErrorBoundary fallback="error occured">
        <button id="register" onClick={() => navigate("/PatientRegister")}>Register</button>
      </ErrorBoundary>
      </form>
    </div>
  );
};

export default PatientLogin;