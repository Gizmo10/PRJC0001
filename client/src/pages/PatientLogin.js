import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './PatientLogin.css';
import ErrorBoundary from '../helper classes/ErrorBoundary';
import PatientRegex from '../helper classes/PatientRegexClass';

const initialState = {
    id: "",
    password: "",
};

const PatientLogin = () => {

    const [state, setState] = useState(initialState);
    const {id, password} = state;
    const navigate = useNavigate();
    const patient = new PatientRegex();

    const validatePatientCredentials = ()=> {
     return patient.validateId(id) && patient.validatePassword(password);
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