import {render, screen} from '@testing-library/react';
import PatientLogin from '../pages/PatientLogin';

test("name label renders successfully", ()=> {

    render(<PatientLogin/>);
    const name_label = screen.getByLabelText('Name:');
    expect(name_label).toBeInTheDocument();
});

test("name input field renders successfully", ()=> {

    render(<PatientLogin/>);
    const name_input_field = screen.getByPlaceholderText('Your name...');
    expect(name_input_field).toBeInTheDocument();
});

test("surname label renders successfully", ()=> {

    render(<PatientLogin/>);
    const surname_label = screen.getByLabelText('Surname:');
    expect(surname_label).toBeInTheDocument();
});

test("surname input field renders successfully", ()=> {

    render(<PatientLogin/>);
    const surname_input_field = screen.getByPlaceholderText('Your surname...');
    expect(surname_input_field).toBeInTheDocument();
});

test("id/passport label renders successfully", ()=> {

    render(<PatientLogin/>);
    const id_label = screen.getByLabelText('Id/Passport:');
    expect(id_label).toBeInTheDocument();
});

test("id/passport input field renders successfully", ()=> {

    render(<PatientLogin/>);
    const id_input_field = screen.getByPlaceholderText('Your id/passport number...');
    expect(id_input_field).toBeInTheDocument();
});

test("password label renders successfully", ()=> {
    
    render(<PatientLogin/>);
    const password_label = screen.getByLabelText('Password:');
    expect(password_label).toBeInTheDocument();
});
    
test("password input field renders successfully", ()=> {

    render(<PatientLogin/>);
    const password_input_field = screen.getByPlaceholderText('Your password...')
    expect(password_input_field).toBeInTheDocument();
});

test("login button renders successfully", ()=> {

    render(<PatientLogin/>);
    const login_button = document.getElementById('login');
    expect(login_button).toBeInTheDocument();
});

test("register button renders successfully", ()=> {

    render(<PatientLogin/>);
    const register_button = document.getElementById('register');
    expect(register_button).toBeInTheDocument();
});
