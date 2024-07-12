import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ErrorBoundary from '../helper classes/ErrorBoundary';
import './Appointments.css';

const initialState = {
  doctorName : "",
  facilityName : "",
  dateFrom : "",
  dateTo: ""
}


const Appointments = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [state, setState] = useState(initialState);
    const {doctorName, facilityName, dateFrom, dateTo} = state;
    const [data, setData] = useState([]);

    const handleInputChange = (e) => {
      const { name, value} = e.target;
      setState({...state, [name] : value });
    };

    const loadData = async () => {
      await axios.get(`http://localhost:8080/appointments/byIdNumber`,{
        params : {idNumber: id}
      }).then((response) => {
        setData(response.data);
      }).catch((err) => {
        console.log(err.response.data)
      })  
    }

    const loadDataByFilteredSearch = async () => {
      await axios.get(`http://localhost:8080/appointments/byFilteredSearch`,{
        params : {
          idNumber: id,
          doctor: doctorName,
          facility: facilityName,
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
    <body className= "appointmentsPage">
      <div className="header">
        
        <ErrorBoundary fallback="error occured">
        <input
          type="text"
          id="filterVal"
          name="doctorName"
          placeholder="doctor's name"
          value={doctorName || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <input
          type="text"
          id="filterVal"
          name="facilityName"
          placeholder="facility name"
          value={facilityName || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <input
          type="date"
          id="filterVal"
          name="dateFrom"
          value={dateFrom || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <input
          type="date"
          id="filterVal"
          name="dateTo"
          value={dateTo || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
          <button id="searchSubmit" onClick={loadDataByFilteredSearch} >search</button>
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
          <button id= "newAppointment" onClick={() => navigate(`/CreateAppointment/${id}`)}>add appointment</button>
        </ErrorBoundary>
      </div>

      <br/><br/>

      <table className="appointmentsTable" id="appointmentsTable">
         <thead>
          <tr>
            <th>Doctor's name</th>
            <th>Medical facility name</th>
            <th>Contact number</th>
            <th>date</th>
          </tr>
         </thead>

         <tbody>
          {data.map((item) => {
            return(
            <tr key={item.id}>
              <td>{item.doctorName}</td>
              <td>{item.facilityName}</td>
              <td>{item.contactNumber}</td>
              <td>{item.date}</td>
            </tr>
            )
          })}
         </tbody>
      </table>
    </body>
  );
};

export default Appointments;