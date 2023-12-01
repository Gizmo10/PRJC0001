import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

    const validatePatientCredentials = ()=> {
     return validateId() && validatePassword();
    };

    const handleInputChange = (e) => {
        const { name, value} = e.target;
        setState({...state, [name] : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        await axios.get(`http://localhost:8080/patient/loginUser`, {
          params: {
              patientId : id,
              patientPassword: password      
                }
             } 
          ).then((response) => {

            if(response.data && validatePatientCredentials()) {
              navigate(`/PatientWelcomeScreen/${id}`);
            } else {
              window.alert("No user registered under that name");
            }
          }).catch((err) => {
            console.log(err.response.data);
          });   
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
          placeholder="Enter ID number..."
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
        placeholder="Enter password..."
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