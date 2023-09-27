import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import axios from "axios";
import './PatientLogin.css';

const initialState = {
    name: "",
    surname: "",
    identityNumber: "",
    password: "",
};

const PatientLogin = () => {

    const [state, setState] = useState(initialState);
    const {name, surname, identityNumber, password} = state;

    const name_surname_pattern = /^[A-Z]{1}([a-z]+)$/;
    const identity_pattern = /[0-9]{6,13}/; 


    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value} = e.target;
        setState({...state, [name] : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !surname || !identityNumber || !password) {
          toast.error("One of the fields is missing a value.");
        } else{
           if(name_surname_pattern.test(name) && name_surname_pattern.test(surname) && identity_pattern.test(identityNumber)) {
            toast.success("Regular Expression meets stanadrd")

           } else {
            toast.error("Doesnt match pattern");
           }
        }

    };

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

      <label htmlFor="password"> Password: </label>
        <input 
        type = "text"
        id = "password"
        name = "password"
        placeholder = "Your Password..."
        value = {password || ""}
        onChange = {handleInputChange}
        />

        <input type="submit" value="Login" />
       <Link  id ="register"  to="/PatientRegister">
            <input type="submit"  value="Register" />
       </Link>

      </form>
    </div>
  );
};

export default PatientLogin;