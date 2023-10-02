import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
/*import axios from "axios";*/
import './PatientLogin.css';
import ErrorBoundary from './ErrorBoundary';

const initialState = {
    name: "",
    surname: "",
    identityNumber: "",
    password: "",
};

const PatientLogin = () => {

    const [state, setState] = useState(initialState);
    const {name, surname, identityNumber, password} = state;
    const navigate = useNavigate();

    const name_pattern = /[A-Z]{1}([a-z]+)$/;
    /*const surname_pattern = */
    const identity_pattern = /[0-9]{6,13}/; 

    const validateName = (user_name) => {

      return  name_pattern.test(user_name);
    }

    const validateIdentity = (user_id_number) => {
      
      return identity_pattern.test(user_id_number);
    }

    const handleInputChange = (e) => {
        const { name, value} = e.target;
        setState({...state, [name] : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        (!name || !surname || !identityNumber || !password) ?
          toast.error("One of the fields is missing a value.") : toast.success("correct input");

    };

  return (
    <div className = "mainDiv">
      <form 
            onSubmit = { handleSubmit }
      >
        <ErrorBoundary fallback="error occured">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name..."
          value={name || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

       <ErrorBoundary fallback="error occured">
       <label htmlFor="surname">Surname: </label>
        <input
        type = "text"
        id = "surname"
        name = "surname"
        placeholder = "Your surname..."
        value = {surname || ""}
        onChange = {handleInputChange}
        />
       </ErrorBoundary>

      <ErrorBoundary fallback="error occured">
      <label htmlFor="password"> Password: </label>
        <input 
        type = "text"
        id = "password"
        name = "password"
        placeholder = "Your password..."
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