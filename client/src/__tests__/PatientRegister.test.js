import {render, screen} from '@testing-library/react';
import PatientRegister from '../pages/PatientRegister';
import { BrowserRouter as Router } from 'react-router-dom';

test("name label renders successfully", ()=> {
    
    render(
    <Router>
      <PatientRegister/> 
    </Router>);
    const name_label = screen.getByLabelText('Name:');
    expect(name_label).toBeInTheDocument();
});

test("name input field renders successfully", ()=> {

    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const name_input_field = document.getElementById('name');
    expect(name_input_field).toBeInTheDocument();
});

test("surname label renders successfully", ()=> {
    
    render(
    <Router>
      <PatientRegister/> 
    </Router>);
    const surname_label = screen.getByLabelText('Surname:');
    expect(surname_label).toBeInTheDocument();
});

test("surname input field renders successfully", ()=> {

    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const surname_input_field = document.getElementById('surname');
    expect(surname_input_field).toBeInTheDocument();
});

test("id label renders successfully", ()=> {
    
    render(
    <Router>
      <PatientRegister/> 
    </Router>);
    const id_label = screen.getByLabelText('Id Number:');
    expect(id_label).toBeInTheDocument();
});

test("id input field renders successfully", ()=> {

    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const id_input_field = document.getElementById('id');
    expect(id_input_field).toBeInTheDocument();
});

test("birthdate label renders successfully", ()=> {
    
    render(
    <Router>
      <PatientRegister/> 
    </Router>);
    const birthdate_label = screen.getByLabelText('Date Of Birth:');
    expect(birthdate_label).toBeInTheDocument();
});

test("birthdate input field renders successfully", ()=> {

    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const birthdate_input_field = document.getElementById("birthdate");
    expect(birthdate_input_field).toBeInTheDocument();
});

test("cellphone label renders successfully", ()=> {
    
    render(
    <Router>
      <PatientRegister/> 
    </Router>);
    const cellphone_label = screen.getByLabelText('Cell Number:');
    expect(cellphone_label).toBeInTheDocument();
});

test("cellphone input field renders successfully", ()=> {

    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const cellphone_input_field = document.getElementById('cellphone');
    expect(cellphone_input_field).toBeInTheDocument();
});

test("email label renders successfully", ()=> {
    
    render(
    <Router>
      <PatientRegister/> 
    </Router>);
    const email_label = screen.getByLabelText('Email:');
    expect(email_label).toBeInTheDocument();
});

test("email input field renders successfully", ()=> {

    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const email_input_field = document.getElementById('email');
    expect(email_input_field).toBeInTheDocument();
});

test("password label renders successfully", ()=> {
    
    render(
    <Router>
      <PatientRegister/> 
    </Router>);
    const password_label = screen.getByLabelText('Password:');
    expect(password_label).toBeInTheDocument();
});

test("password input field renders successfully", ()=> {

    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const password_input_field = document.getElementById('password');
    expect(password_input_field).toBeInTheDocument();
});

test("retype label renders successfully", ()=> {
    
    render(
    <Router>
      <PatientRegister/> 
    </Router>);
    const retype_label = screen.getByLabelText('Re-Type Password:');
    expect(retype_label).toBeInTheDocument();
});

test("retype input field renders successfully", ()=> {

    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const retype_input_field = document.getElementById('rePassword');
    expect(retype_input_field).toBeInTheDocument();
});

test("street label renders successfully", ()=> {
    
    render(
    <Router>
      <PatientRegister/> 
    </Router>);
    const street_label = screen.getByLabelText('Street:');
    expect(street_label).toBeInTheDocument();
});

test("street input field renders successfully", ()=> {

    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const street_input_field = document.getElementById('street');
    expect(street_input_field).toBeInTheDocument();
});

test("suburb label renders successfully", ()=> {
    
    render(
    <Router>
      <PatientRegister/> 
    </Router>);
    const suburb_label = screen.getByLabelText('Suburb:');
    expect(suburb_label).toBeInTheDocument();
});

test("suburb input field renders successfully", ()=> {

    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const suburb_input_field = document.getElementById('suburb');
    expect(suburb_input_field).toBeInTheDocument();
});

test("city label renders successfully", ()=> {
    
    render(
    <Router>
      <PatientRegister/> 
    </Router>);
    const city_label = screen.getByLabelText('City:');
    expect(city_label).toBeInTheDocument();
});

test("city input field renders successfully", ()=> {

    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const city_input_field = document.getElementById('city');
    expect(city_input_field).toBeInTheDocument();
});

test("postalcode label renders successfully", ()=> {
    
    render(
    <Router>
      <PatientRegister/> 
    </Router>);
    const postalcode_label = screen.getByLabelText('Postal Code:');
    expect(postalcode_label).toBeInTheDocument();
});

test("postalcode input field renders successfully", ()=> {

    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const postalcode_input_field = document.getElementById('code');
    expect(postalcode_input_field).toBeInTheDocument();
});

test("province label renders successfully", ()=> {
    
    render(
    <Router>
      <PatientRegister/> 
    </Router>);
    const province_label = screen.getByLabelText('Province:');
    expect(province_label).toBeInTheDocument();
});

test("province input field renders successfully", ()=> {

    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const province_input_field = document.getElementById('province');
    expect(province_input_field).toBeInTheDocument();
});

test("idupload label renders successfully", ()=> {
    
    render(
    <Router>
      <PatientRegister/> 
    </Router>);
    const idupload_label = screen.getByLabelText('Upload ID:');
    expect(idupload_label).toBeInTheDocument();
});

test("idupload input field renders successfully", ()=> {

    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const idupload_input_field = document.getElementById("idF");
    expect(idupload_input_field).toBeInTheDocument();
});

test("selfie upload label renders successfully", ()=> {
    
  render(
  <Router>
    <PatientRegister/> 
  </Router>);
  const selfie_upload_label = screen.getByLabelText('Upload Selfie:');
  expect(selfie_upload_label).toBeInTheDocument();
});

test("selfie upload input field renders successfully", ()=> {

  render(
      <Router>
        <PatientRegister/> 
      </Router>);
  const selfie_input_field = document.getElementById("selfieF");
  expect(selfie_input_field).toBeInTheDocument();
});












