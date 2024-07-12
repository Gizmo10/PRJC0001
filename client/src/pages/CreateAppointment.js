import {useState, React  } from 'react';
import ErrorBoundary from '../helper classes/ErrorBoundary';
import axios from "axios";
import { useNavigate, useParams  } from 'react-router-dom';
import './CreateAppointment.css'

const initialState = {
    doctorName: "",
    facilityName: "",
    contactNumber: "",
    date: ""
};

const CreateAppointment = () => {
    const [state, setState] = useState(initialState);
    const {doctorName, facilityName, contactNumber, date} = state;
    const navigate = useNavigate();
    const { id } = useParams();

    const handleInputChange = (e) => {
        const { name, value} = e.target;
        setState({...state, [name]:value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let file = new FormData(document.getElementById('appointmentForm'));
        file.append("idNumber", id);
        
        await axios.post(`http://localhost:8080/appointments/createAppointment`, file, {
            headers: {
            'Content-Type' : "multipart/form-data",
        }
        }).then ((response) => {
            if(response.data){
                window.alert("Appointment created successfully")
                navigate(`/Appointments/${id}`);
            } else {
                window.alert("Appointment failed to create");
            }
            }).catch((err) => {
                console.log(err.response.data);
            });
        }

  return (
    <div className="appointment">
    <form id="appointmentForm" encType="multipart/form-data" onSubmit={handleSubmit} >
        <ErrorBoundary fallback="error occured">
        <label htmlFor="doctorName">Doctors name: </label>
        <input
          type="text"
          id="doctorName"
          name="doctorName"
          value={doctorName || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="facilityName">Facility name: </label>
        <input
          type="text"
          id="facilityName"
          name="facilityName"
          value={facilityName || ""}
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
        <input type= "submit" value="Submit" id="submit" />    
        </ErrorBoundary>
    </form>
    </div>
  )
}

export default CreateAppointment;