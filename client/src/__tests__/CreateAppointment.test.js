import {render, screen} from '@testing-library/react';
import CreateAppointment from '../pages/CreateAppointment';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import React from 'react'; 

test("renders the react App root element", ()=> {
  
    render(
    <Router>
        <App />
    </Router>);
    screen.debug();
});

test("name label renders successfully", ()=> {
    
    render(
    <Router>
      <CreateAppointment/> 
    </Router>);
    const name_label = screen.getByLabelText('Doctors name:');
    expect(name_label).toBeInTheDocument();
});

test("name input field renders successfully", ()=> {

    render(
        <Router>
          <CreateAppointment/> 
        </Router>);
    const name_input_field = document.getElementById('doctorName');
    expect(name_input_field).toBeInTheDocument();
});

test("facility name label renders successfully", ()=> {
    
    render(
    <Router>
      <CreateAppointment/> 
    </Router>);
    const facility_label = screen.getByLabelText('Facility name:');
    expect(facility_label).toBeInTheDocument();
});

test("facility input field renders successfully", ()=> {

    render(
        <Router>
          <CreateAppointment/> 
        </Router>);
    const facility_input_field = document.getElementById('facilityName');
    expect(facility_input_field).toBeInTheDocument();
});

test("date label renders successfully", ()=> {
    
    render(
    <Router>
      <CreateAppointment/> 
    </Router>);
    const date_label = screen.getByLabelText('Date:');
    expect(date_label).toBeInTheDocument();
});

test("date input field renders successfully", ()=> {

    render(
        <Router>
          <CreateAppointment/> 
        </Router>);
    const date_input_field = document.getElementById('date');
    expect(date_input_field).toBeInTheDocument();
});

test("contact number label renders successfully", ()=> {
    
    render(
    <Router>
      <CreateAppointment/> 
    </Router>);
    const contact_number_label = screen.getByLabelText('Contact number:');
    expect(contact_number_label).toBeInTheDocument();
});

test("contact number input field renders successfully", ()=> {

    render(
        <Router>
          <CreateAppointment/> 
        </Router>);
    const contact_number_input_field = document.getElementById('contactNumber');
    expect(contact_number_input_field).toBeInTheDocument();
});

test("submit button renders successfully", ()=> {

    render(
        <Router>
          <CreateAppointment/> 
        </Router>);
    const create_appointment_button = screen.getByText('Submit');
    expect(create_appointment_button).toBeInTheDocument();
});