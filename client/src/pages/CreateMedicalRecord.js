import {useState, React  } from 'react';
import ErrorBoundary from '../helper classes/ErrorBoundary';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './CreateMedicalRecord.css'

const initialState = {
    idNumber: "",
    name: "",
    facility: "",
    prescription: "",
    diagnosis: "",
    date: "",
    contactNumber: "",
};

const CreateMedicalRecord = () => {
    const [state, setState] = useState(initialState);
    const {idNumber, name, facility, prescription, diagnosis, date, contactNumber} = state;
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value} = e.target;
        setState({...state, [name]:value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let file = new FormData(document.getElementById('medicalRecordForm'));
        
        await axios.post(`http://localhost:8080/record/addNew`, file, {
            headers: {
            'Content-Type' : "multipart/form-data",
        }
        }).then ((response) => {
            if(response.data){
                window.alert("Record created successfully")
                navigate(`/PatientWelcomeScreen/${idNumber}`);
            } else {
                window.alert("Record failed to create");
            }
            }).catch((err) => {
                console.log(err.response.data);
            });
        }

  return (
    <div className="patientRegister">
    <form id="medicalRecordForm" encType="multipart/form-data" onSubmit={handleSubmit} >
        <ErrorBoundary fallback="error occured">
        <label htmlFor="name">Doctors name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="facility">Facility name: </label>
        <input
          type="text"
          id="facility"
          name="facility"
          value={facility || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="idNumber">ID number: </label>
        <input
          type="text"
          id="idNumber"
          name="idNumber"
          value={idNumber || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="prescription">Prescription: </label>
        <input
          type="textarea"
          id="prescription"
          name="prescription"
          value={prescription || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="diagnosis">Diagnosis: </label>
        <input
          type="textarea"
          id="diagnosis"
          name="diagnosis"
          value={diagnosis || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="date">Date: </label>
        <input
          type="date"
          id="date"
          name="date"
          value={date || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="contactNumber">Contact number: </label>
        <input
          type="text"
          id="contactNumber"
          name="contactNumber"
          value={contactNumber || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <input type= "submit" value="Submit" id="submit" />    
        </ErrorBoundary>
    </form>
    </div>
  )
}

export default CreateMedicalRecord