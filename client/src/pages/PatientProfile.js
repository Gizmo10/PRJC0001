import { React, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ErrorBoundary from '../helper classes/ErrorBoundary';
import axios from "axios";
import './PatientProfile.css'

const PatientProfile = () => {

    const [profile, setProfile ] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    const loadData = async () => {
        await axios.get(`http://localhost:8080/patient/registeredById`,{
          params : {idNumber: id}
        }).then((response) => {
          setProfile(response.data);
        }).catch((err) => {
          console.log(err.response.data)
        })  
      };

    useEffect(() => {
        loadData();
    }, []);

  return (
    <div className="profileBar">
        <ErrorBoundary fallback="error occured">
            <h1 id="profileBanner">PROFILE</h1>
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
            <ul id="registrationDetails"> 
                <li><h3>Name: {profile.name}</h3></li>
                <li><h3>Surname: {profile.surname}</h3></li>
                <li><h3>ID: {profile.id}</h3></li>
                <li><h3>Date Of Birth: {profile.birthdate}</h3></li>
                <li><h3>Email: {profile.email}</h3></li>
                <li><h3>Cellphone: {profile.cellphone}</h3></li>
                <li><h3>Street: {profile.street}</h3></li>
                <li><h3>Suburb: {profile.suburb}</h3></li>
                <li><h3>City: {profile.city}</h3></li>
                <li><h3>Code: {profile.code}</h3></li>
                <li><h3>Province: {profile.province}</h3></li>
            </ul>
        </ErrorBoundary>
        
        <ErrorBoundary fallback="error occured">
            <button id="appointments" onClick={()=> navigate(`/Appointments/${id}`)}>Appointments</button>
        </ErrorBoundary>

    </div>
  )
};

export default PatientProfile;