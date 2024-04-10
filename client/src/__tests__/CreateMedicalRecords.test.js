import {render, screen} from '@testing-library/react';
import CreateMedicalRecord from '../pages/CreateMedicalRecord';
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
      <CreateMedicalRecord/> 
    </Router>);
    const name_label = screen.getByLabelText('Doctors name:');
    expect(name_label).toBeInTheDocument();
});

test("name input field renders successfully", ()=> {

    render(
        <Router>
          <CreateMedicalRecord/> 
        </Router>);
    const name_input_field = document.getElementById('name');
    expect(name_input_field).toBeInTheDocument();
});

test("facility name label renders successfully", ()=> {
    
    render(
    <Router>
      <CreateMedicalRecord/> 
    </Router>);
    const facility_label = screen.getByLabelText('Facility name:');
    expect(facility_label).toBeInTheDocument();
});

test("facility input field renders successfully", ()=> {

    render(
        <Router>
          <CreateMedicalRecord/> 
        </Router>);
    const facility_input_field = document.getElementById('facility');
    expect(facility_input_field).toBeInTheDocument();
});

test("id number label renders successfully", ()=> {
    
    render(
    <Router>
      <CreateMedicalRecord/> 
    </Router>);
    const id_number_label = screen.getByLabelText('ID number:');
    expect(id_number_label).toBeInTheDocument();
});

test("id number input field renders successfully", ()=> {

    render(
        <Router>
          <CreateMedicalRecord/> 
        </Router>);
    const id_number_input_field = document.getElementById('idNumber');
    expect(id_number_input_field).toBeInTheDocument();
});

test("prescription label renders successfully", ()=> {
    
    render(
    <Router>
      <CreateMedicalRecord/> 
    </Router>);
    const prescription_label = screen.getByLabelText('Prescription:');
    expect(prescription_label).toBeInTheDocument();
});

test("prescription input field renders successfully", ()=> {

    render(
        <Router>
          <CreateMedicalRecord/> 
        </Router>);
    const prescription_input_field = document.getElementById('prescription');
    expect(prescription_input_field).toBeInTheDocument();
});

test("diagnosis label renders successfully", ()=> {
    
    render(
    <Router>
      <CreateMedicalRecord/> 
    </Router>);
    const diagnosis_label = screen.getByLabelText('Diagnosis:');
    expect(diagnosis_label).toBeInTheDocument();
});

test("diagnosis input field renders successfully", ()=> {

    render(
        <Router>
          <CreateMedicalRecord/> 
        </Router>);
    const diagnosis_input_field = document.getElementById('diagnosis');
    expect(diagnosis_input_field).toBeInTheDocument();
});

test("date label renders successfully", ()=> {
    
    render(
    <Router>
      <CreateMedicalRecord/> 
    </Router>);
    const date_label = screen.getByLabelText('Date:');
    expect(date_label).toBeInTheDocument();
});

test("date input field renders successfully", ()=> {

    render(
        <Router>
          <CreateMedicalRecord/> 
        </Router>);
    const date_input_field = document.getElementById('date');
    expect(date_input_field).toBeInTheDocument();
});

test("contact number label renders successfully", ()=> {
    
    render(
    <Router>
      <CreateMedicalRecord/> 
    </Router>);
    const contact_number_label = screen.getByLabelText('Contact number:');
    expect(contact_number_label).toBeInTheDocument();
});

test("contact number input field renders successfully", ()=> {

    render(
        <Router>
          <CreateMedicalRecord/> 
        </Router>);
    const contact_number_input_field = document.getElementById('contactNumber');
    expect(contact_number_input_field).toBeInTheDocument();
});

test("submit button renders successfully", ()=> {

    render(
        <Router>
          <CreateMedicalRecord/> 
        </Router>);
    const create_record_button = screen.getByText('Submit');
    expect(create_record_button).toBeInTheDocument();
});