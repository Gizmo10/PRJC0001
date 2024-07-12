import {render, screen} from '@testing-library/react';
import Appointments from '../pages/Appointments';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import App from '../App';
import React from 'react'; 

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
          <Appointments/> 
        </Router>);
    const search_input_fields = document.getElementsByName('filterVal');
    
    search_input_fields.forEach((elem) => {
        expect(elem).toBeInTheDocument();
    })
});

test("search button renders successfully", ()=> {

    render(
        <Router>
          <Appointments/> 
        </Router>);
    const search_button = document.getElementById("searchSubmit");
    expect(search_button).toBeInTheDocument();
});

test("new appointments button renders successfully", ()=> {

    render(
        <Router>
          <Appointments/> 
        </Router>);
    const new_appointments_button = document.getElementById("newAppointment");
    expect(new_appointments_button).toBeInTheDocument();
});


test("appointments table renders successfully", ()=> {

    render(
        <Router>
          <Appointments/> 
        </Router>);
    const appointments_table = document.getElementById("appointmentsTable");
    expect(appointments_table).toBeInTheDocument();
});


