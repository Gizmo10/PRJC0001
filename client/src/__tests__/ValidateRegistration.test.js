import {render} from '@testing-library/react';
import PatientRegister from '../pages/PatientRegister';
import { BrowserRouter as Router } from 'react-router-dom';
import ValidateRegistration from '../helper classes/ValidateRegistration';

const validateRegistration = new ValidateRegistration();

test("The name input field warns user for invalid input", ()=> {
    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const name = "5ames"    
    const res = validateRegistration.validateRegistrationName(name);
    const name_input_field = document.getElementById('name');

    expect(res).toBe(false);
    expect(name_input_field.innerText).toBe('The name format is not valid');
})

test("The surname input field warns user for invalid input", ()=> {
    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const surname = "Frank54"    
    const res = validateRegistration.ValidateRegistrationSurname(surname);
    const surname_input_field = document.getElementById('surname');

    expect(res).toBe(false);
    expect(surname_input_field.innerText).toBe('The surname format is not valid');
})

test("The id input field warns user for invalid input", ()=> {
    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const id = "9901176775080134"    
    const res = validateRegistration.validateRegistrationId(id);
    const id_input_field = document.getElementById('id');

    expect(res).toBe(false);
    expect(id_input_field.innerText).toBe('The id format is not valid');
})

test("Validate registration birthdate input", ()=> {
    const birthdate = "1405-02-10"    
    const res = validateRegistration.validateRegistrationBirthdate(birthdate);

    expect(res).toBe(false);
})

test("The id matches the birthdate", ()=> {
    const id = "9705065334080";
    const birthdate = "1997-05-06";    
    const res = validateRegistration.validateRegistrationBirthdateMatchesId(id,birthdate);

    expect(res).toBe(true);
})

test("The id mismatches birthdate by a year", ()=> {
    const id = "9705065334080";
    const birthdate = "1996-05-06";    
    const res = validateRegistration.validateRegistrationBirthdateMatchesId(id,birthdate);

    expect(res).toBe(false);
})

test("The id mismatches the birthdate by month", ()=> {
    const id = "9705065334080";
    const birthdate = "1997-10-06";    
    const res = validateRegistration.validateRegistrationBirthdateMatchesId(id,birthdate);

    expect(res).toBe(false);
})

test("The id mismatches the birthdate by day", ()=> {
    const id = "9705065334080";
    const birthdate = "1997-05-26";    
    const res = validateRegistration.validateRegistrationBirthdateMatchesId(id,birthdate);

    expect(res).toBe(false);
})

test("The cellphone input field warns user for invalid input", ()=> {
    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const cellphone = "+2773456897"    
    const res = validateRegistration.validateRegistrationCellphone(cellphone);
    const cellphone_input_field = document.getElementById('cellphone');

    expect(res).toBe(false);
    expect(cellphone_input_field.innerText).toBe('The cellphone format is not valid');
})

test("The email input field warns user for invalid input", ()=> {
    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const email = "cjay16@.com"    
    const res = validateRegistration.validateRegistrationEmail(email);
    const email_input_field = document.getElementById('email');

    expect(res).toBe(false);
    expect(email_input_field.innerText).toBe('The email format is not valid');
})

test("The password input field warns user for invalid input", ()=> {
    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const password = "pass123-@099"    
    const res = validateRegistration.validateRegistrationPassword(password);
    const password_input_field = document.getElementById('password');

    expect(res).toBe(false);
    expect(password_input_field.innerText).toBe('The password format is not valid');
})

test("The password matches retypedPassword", ()=> {
    const password = "pass123";
    const retyped = "pass123";
    const res = validateRegistration.validateRegistrationPasswordMatchesRetypedPassword(password,retyped);

    expect(res).toBe(true);
})

test("The password mismatches retypedPassword", ()=> {
    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const password = "Pass123";
    const retyped = "pass123";
    const res = validateRegistration.validateRegistrationPasswordMatchesRetypedPassword(password,retyped);
    const elem = document.getElementById('rePassword');

    expect(res).toBe(false);
    expect(elem.innerText).toBe('Passwords must match');
})

test("The street input field warns user of invalid input", ()=> {
    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const street = "Test";
    const res = validateRegistration.validateRegistrationStreet(street);
    const elem = document.getElementById('street');

    expect(res).toBe(false);
    expect(elem.innerText).toBe('The street format is not valid');
})

test("The suburb input field warns user of invalid input", ()=> {
    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const suburb = "@#4";
    const res = validateRegistration.validateRegistrationSuburb(suburb);
    const elem = document.getElementById('suburb');

    expect(res).toBe(false);
    expect(elem.innerText).toBe('The suburb format is not valid');
})

test("The city input field warns user of invalid input", ()=> {
    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const city = "gT#4";
    const res = validateRegistration.validateRegistrationCity(city);
    const elem = document.getElementById('city');

    expect(res).toBe(false);
    expect(elem.innerText).toBe('The city format is not valid');
})

test("The province input field warns user of invalid input", ()=> {
    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const province = "G78=";
    const res = validateRegistration.validateRegistrationProvince(province);
    const elem = document.getElementById('province');

    expect(res).toBe(false);
    expect(elem.innerText).toBe('The province format is not valid');
})

test("The code input field warns user of invalid input", ()=> {
    render(
        <Router>
          <PatientRegister/> 
        </Router>);
    const code = "123456";
    const res = validateRegistration.validateRegistrationPostalCode(code);
    const elem = document.getElementById('code');

    expect(res).toBe(false);
    expect(elem.innerText).toBe('The postal code format is not valid');
})

test("User with valid input", ()=> {
    render(
        <Router>
          <PatientRegister/> 
        </Router>);

    const state = {
        name: "King",
        surname: "Joe",
        id: "9405134335088",
        birthdate: "1994-05-13",
        cellphone: "0635430900",
        email: "greet@gmail.com",
        password: "tyr54HUI",
        rePassword: "tyr54HUI",
        street: "12 Oak Street",
        suburb: "Crystal Park",
        city: "Benoni",
        code: "0987",
        province: "Gauteng",
        idF: "Rand"
    };

    expect(validateRegistration.validateAll(state)).toBe(true);
})

test("User with passwords not matching", ()=> {
    render(
        <Router>
          <PatientRegister/> 
        </Router>);

    const state = {
        name: "King",
        surname: "Joe",
        id: "9405134335088",
        birthdate: "1994-05-13",
        cellphone: "0635430900",
        email: "greet@gmail.com",
        password: "tyr54HUI",
        rePassword: "tyR54HUI",
        street: "12 Oak Street",
        suburb: "Crystal Park",
        city: "Benoni",
        code: "0987",
        province: "Gauteng",
        idF: "Rand"
    };

    expect(validateRegistration.validateAll(state)).toBe(false);
})

test("User with empty ID field", ()=> {
    render(
        <Router>
          <PatientRegister/> 
        </Router>);

    const state = {
        name: "King",
        surname: "Joe",
        id: "9405134335088",
        birthdate: "1994-05-13",
        cellphone: "0113456343",
        email: "greet@gmail.com",
        password: "tyr54HUI",
        rePassword: "tyr54HUI",
        street: "12 Oak Street",
        suburb: "Crystal Park",
        city: "Benoni",
        code: "0987",
        province: "Gauteng",
        idF: ""
    };

    expect(validateRegistration.validateAll(state)).toBe(false);
})

test("User with an empty form", ()=> {
    const state = {};
    expect(validateRegistration.validateAll(state)).toBe(false);
})










