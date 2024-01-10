import React, { useState } from 'react'
import ErrorBoundary from '../helper classes/ErrorBoundary';
import './PatientRegister.css';
import ValidateRegistration from '../helper classes/ValidateRegistration';
import axios from 'axios';

const initialState = {
  name: "",
  surname:"",
  id:"",
  birthdate:"",
  cellphone:"",
  email:"",
  password:"",
  rePassword:"",
  street:"",
  suburb:"",
  city:"",
  code:"",
  province:"",
  idF:"",
};

const PatientRegister = () => {
  const [state, setState] = useState(initialState);
  const{name,surname,id,birthdate,cellphone,email,password,rePassword,
    street,suburb,city,code,province,idF} = state;
  const patient = new ValidateRegistration();

  const handleInputChange = (e) => {
    const { name, value} = e.target;
    setState({...state, [name]:value});
};

const handleSubmit = async (e) => {
  e.preventDefault();
 
  if(patient.validateAll(state)) {

    await axios.post(`http://localhost:8080/patient/addPatientCredentials`,null,{
    params : {
      id : id,
      password: password
      }
    }
    ).then(() => {
      console.log("Patient credentials stored successfully");

    }).catch((error) => {
      console.log(error);
    })

    await axios.post(`http://localhost:8080/patient/registerPatient`, {
      name : name,
      surname : surname,
      id: id,
      birthdate: birthdate,
      cellphoneNumber : cellphone,
      email : email,
      streetName : street,
      suburb : suburb,
      city : city,
      postalCode : code,
      province : province 
    }).then (() => {
      console.log("Registered patient successfully");
    }).catch((error) => {
      console.log(error);
    })

  } else {
    console.log("Please review the input");
  }
};

  return (
    <div className="patientRegister">
      <form onSubmit={handleSubmit} >
        <ErrorBoundary fallback="error occured">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="surname">Surname: </label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={surname || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>
        
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
        <label htmlFor="birthdate">Date Of Birth: </label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={birthdate || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="cellphone">Cell Number: </label>
        <input
          type="text"
          id="cellphone"
          name="cellphone"
          value={cellphone || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

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

        <ErrorBoundary fallback="error occured">
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          id="password"
          name="password"
          value={password || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="rePassword">Re-Type Password: </label>
        <input
          type="text"
          id="rePassword"
          name="rePassword"
          value={rePassword || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="street">Street: </label>
        <input
          type="text"
          id="street"
          name="street"
          value={street || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="suburb">Suburb: </label>
        <input
          type="text"
          id="suburb"
          name="suburb"
          value={suburb || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>
        
        <ErrorBoundary fallback="error occured">
        <label htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          name="city"
          value={city || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="code">Postal Code: </label>
        <input
          type="text"
          id="code"
          name="code"
          value={code || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="province">Province: </label>
        <input
          type="text"
          id="province"
          name="province"
          value={province || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="idF">Upload ID: </label>
        <input
          type="file"
          id="idF"
          name="idF"
          value={idF|| ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occurred">
        <input type="submit" value="Register" id="register"/>
      </ErrorBoundary>

      </form>
      </div>
  )
}

export default PatientRegister