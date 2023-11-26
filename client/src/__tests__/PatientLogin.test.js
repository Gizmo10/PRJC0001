import {render, screen} from '@testing-library/react';
import PatientLogin from '../pages/PatientLogin';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import App from '../App';

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
    const id_input_field = screen.getByPlaceholderText('Enter valid ID number...');
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
    const password_input_field = screen.getByPlaceholderText('Enter password...')
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
    const register_button = screen.getByText("Register");
    expect(register_button).toBeInTheDocument();
});

test("renders the react App root element", ()=> {
  
    render(
    <Router>
        <App />
    </Router>);
    screen.debug();
});

test("The register button navigates to the Registration page", ()=> {

    render(
        <Router>
          <PatientLogin/> 
        </Router>);
    const register_button = screen.getByText("Register");
    expect(register_button).toBeInTheDocument();

    userEvent.click(register_button);
    const patient_register_screen = screen.getByText("PatientRegister");
    
    expect(patient_register_screen).toBeInTheDocument();
}); 











