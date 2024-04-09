import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ErrorBoundary from '../helper classes/ErrorBoundary';
import './PatientWelcomeScreen.css';

const initialState = {
  doctor : "",
  facility : "",
  dateFrom : "",
  dateTo : "",
}


const PatientWelcomeScreen = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [state, setState] = useState(initialState);
    const {doctor, facility, dateFrom, dateTo} = state;
    const [data, setData] = useState([]);

    const handleInputChange = (e) => {
      const { name, value} = e.target;
      setState({...state, [name] : value });
    };

    const loadData = async () => {
      await axios.get(`http://localhost:8080/record/getByIdNumber`,{
        params : {idNumber: id}
      }).then((response) => {
        setData(response.data);
      }).catch((err) => {
        console.log(err.response.data)
      })  
    }

    const loadDataByFacility = async () => {
      await axios.get(`http://localhost:8080/record/getByFilteredSearch`,{
        params : {
          idNumber: id,
          facility: facility,
          doctor: doctor,
          dateFrom: dateFrom,
          dateTo: dateTo
        }
      }).then((response) => {
        setData(response.data);
      }).catch((err) => {
        console.log(err.response.data)
      })   
    }
  
    useEffect(() => {
      loadData();
    }, []);

  return (
    <body className= "welcomeScreen">
      <div className="footer">
        <button id = "profile"> P </button>
        
        <ErrorBoundary fallback="error occured">
        <input
          type="text"
          id="filterVal"
          name="doctor"
          placeholder="doctor's name"
          value={doctor || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <input
          type="text"
          id="filterVal"
          name="facility"
          placeholder="facility name"
          value={facility || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <input
          type="date"
          id="filterVal"
          name="dateFrom"
          placeholder="start date"
          value={dateFrom || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <input
          type="date"
          id="filterVal"
          name="dateTo"
          placeholder="end date"
          value={dateTo || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
          <button id="searchSubmit" onClick={loadDataByFacility} >search</button>
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
          <button id= "newRecord" onClick={() => navigate("/CreateMedicalRecord")}>add record</button>
        </ErrorBoundary>
      </div>

      <br/><br/>

      <table className="medicalRecordsTable">
         <thead>
          <tr>
            <th>Doctor's name</th>
            <th>Medical facility name</th>
            <th>Diagnosis</th>
            <th>Prescription</th>
            <th>Date</th>
            <th>Contact number</th>
          </tr>
         </thead>

         <tbody>
          {data.map((item) => {
            return(
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.facility}</td>
              <td>{item.diagnosis}</td>
              <td>{item.prescription}</td>
              <td>{item.date}</td>
              <td>{item.contactNumber}</td>
            </tr>
            )
          })}
         </tbody>
      </table>
    </body>
  );
};

export default PatientWelcomeScreen;