import {render, screen} from '@testing-library/react';
import PatientWelcomeScreen from '../pages/PatientWelcomeScreen';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import App from '../App';
import React from 'react'; 
import CreateMedicalRecord from '../pages/CreateMedicalRecord';

test("renders the react App root element", ()=> {
  
    render(
    <Router>
        <App />
    </Router>);
    screen.debug();
});

test("search input fields render successfully", ()=> {

    render(
        <Router>
          <PatientWelcomeScreen/> 
        </Router>);
    const name_search_input_field = document.getElementsByName('filterVal');
    
    name_search_input_field.forEach((elem) => {
        expect(elem).toBeInTheDocument();
    })
});

test("search button renders successfully", ()=> {

    render(
        <Router>
          <PatientWelcomeScreen/> 
        </Router>);
    const search_button = document.getElementById("searchSubmit");
    expect(search_button).toBeInTheDocument();
});

test("new record record button renders successfully", ()=> {

    render(
        <Router>
          <PatientWelcomeScreen/> 
        </Router>);
    const new_record_button = document.getElementById("newRecord");
    expect(new_record_button).toBeInTheDocument();
});

test("profile button renders successfully", ()=> {

    render(
        <Router>
          <PatientWelcomeScreen/> 
        </Router>);
    const profile_button = document.getElementById("profile");
    expect(profile_button).toBeInTheDocument();
});

test("records table renders successfully", ()=> {

    render(
        <Router>
          <PatientWelcomeScreen/> 
        </Router>);
    const records_table = document.getElementById("recordsTable");
});


