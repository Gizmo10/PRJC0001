import {render, screen} from '@testing-library/react';
import PatientLogin from '../pages/PatientLogin';
import PatientRegister from '../pages/PatientRegister';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import App from '../App';
import ForgotPassword from '../pages/ForgotPassword';
import React from 'react'; 

test("renders the react App root element", ()=> {
  
    render(
    <Router>
        <App />
    </Router>);
    screen.debug();
});

test("id label renders successfully", ()=> {
    
    render(
    <Router>
      <PatientLogin/> 
    </Router>);
    const id_label = screen.getByLabelText('Id Number:');
    expect(id_label).toBeInTheDocument();
});

test("id input field renders successfully", ()=> {

    render(
        <Router>
          <PatientLogin/> 
        </Router>);
    const id_input_field = document.getElementById('id');
    expect(id_input_field).toBeInTheDocument();
});

test("password label renders successfully", ()=> {
    
    render(
        <Router>
          <PatientLogin/> 
        </Router>);
    const password_label = screen.getByLabelText('Password:');
    expect(password_label).toBeInTheDocument();
});
    
test("password input field renders successfully", ()=> {

    render(
        <Router>
          <PatientLogin/> 
        </Router>);
    const password_input_field = document.getElementById('password')
    expect(password_input_field).toBeInTheDocument();
});

test("login button renders successfully", ()=> {

    render(
        <Router>
          <PatientLogin/> 
        </Router>);
    const login_button = screen.getByDisplayValue("Login");
    expect(login_button).toBeInTheDocument();
});

test("register button renders successfully", ()=> {

    render(
        <Router>
          <PatientLogin/> 
        </Router>);
    const register_button = screen.getByText('Register');
    expect(register_button).toBeInTheDocument();
});

test("The register button navigates to the Registration page", async ()=> {
    userEvent.setup();
    render(
        <Router>
          <PatientLogin/> 
          <PatientRegister/>
        </Router>);
    const register_button = screen.getByText('Register');
    expect(register_button).toBeInTheDocument();

    await userEvent.click(register_button);
    const register_name_label = screen.getByLabelText('Name:');
    expect(register_name_label).toBeInTheDocument();
}); 

test("forgot password button renders successfully", ()=> {

    render(
        <Router>
          <PatientLogin/> 
        </Router>);
    const forgot_password_button = screen.getByText('Forgot Password');
    expect(forgot_password_button).toBeInTheDocument();
});

test("The forgot password button navigates to the Forgot Password page", async ()=> {
    userEvent.setup();
    render(
        <Router>
          <PatientLogin/>
          <ForgotPassword/>
        </Router>);
    const forgot_password_button = screen.getByText('Forgot Password');
    expect(forgot_password_button).toBeInTheDocument();

    await userEvent.click(forgot_password_button);
    const email_label = screen.getByLabelText('Email:');
    expect(email_label).toBeInTheDocument();
}); 












