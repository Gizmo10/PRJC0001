import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './PatientLogin.css';

const initialState = {
    name: "",
    surname: "",
    identityNumber: "",
}

const PatientLogin = () => {

    const [state, setState] = useState(initialState);
    const {name, surname, identityNumber} = state;

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { state, value} = e.target;
        setState({...state, [name] : value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className = "mainDiv">
      <form 
            onSubmit = { handleSubmit }
      >
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name..."
          value={name || ""}
          onChange={handleInputChange}
        />

        <label htmlFor="surname">Surname: </label>
        <input
        type = "text"
        id = "surname"
        name = "surname"
        placeholder = "Your surname..."
        value = {surname || ""}
        onChange = {handleInputChange}
        />

        <label htmlFor="identity"> Id/Passport: </label>
        <input 
        type = "text"
        id = "identity"
        name = "identity"
        placeholder = "Your ID/Passport number..."
        value = {identityNumber || ""}
        onChange = {handleInputChange}
        />

        <input type="submit" value="Login" />
       <Link  to="/PatientRegister">
            <input id ="register" type="submit"  value="Register" />
       </Link>

      </form>
    </div>
  )
}

export default PatientLogin;