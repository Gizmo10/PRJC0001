import App from '../App';
import React from 'react'; 
import {render, screen} from '@testing-library/react';
import PatientProfile from '../pages/PatientProfile';
import { BrowserRouter as Router } from 'react-router-dom';

test("renders the react App root element", ()=> {
  
    render(
    <Router>
        <App />
    </Router>);
    screen.debug();
});

test("Profile banner renders successfully", ()=> {

    render(
        <Router>
          <PatientProfile/> 
        </Router>);
    const profile_banner = document.getElementById("profileBanner");
    expect(profile_banner).toBeInTheDocument();
});

test("Registration details list renders successfully", ()=> {

    render(
        <Router>
          <PatientProfile/> 
        </Router>);
    const registration_details = document.getElementById("registrationDetails");
    expect(registration_details).toBeInTheDocument();
});

test("Appointments button renders successfully", ()=> {

    render(
        <Router>
          <PatientProfile/> 
        </Router>);
    const appointments_button = document.getElementById("appointments");
    expect(appointments_button).toBeInTheDocument();
});

