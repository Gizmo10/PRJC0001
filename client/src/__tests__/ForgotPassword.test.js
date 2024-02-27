import {render, screen} from '@testing-library/react';
import ForgotPassword from '../pages/ForgotPassword';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

test("renders the react App root element", ()=> {
  
    render(
    <Router>
        <App />
    </Router>);
    screen.debug();
});

test("forgot password email label renders successfully", ()=> {
    
    render(
    <Router>
      <ForgotPassword/> 
    </Router>);
    const email_label = screen.getByLabelText('Email:');
    expect(email_label).toBeInTheDocument();
});

test("forgot password email input field renders successfully", ()=> {

    render(
        <Router>
          <ForgotPassword/> 
        </Router>);
    const email_input_field = document.getElementById('email')
    expect(email_input_field).toBeInTheDocument();
});

test("forgot password email submit button renders successfully", ()=> {

    render(
        <Router>
          <ForgotPassword/> 
        </Router>);
    const email_submit_button = screen.getByDisplayValue("Submit");
    expect(email_submit_button).toBeInTheDocument();
});