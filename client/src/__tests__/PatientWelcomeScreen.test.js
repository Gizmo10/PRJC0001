import {render, screen} from '@testing-library/react';
import PatientWelcomeScreen from '../pages/PatientWelcomeScreen';
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

