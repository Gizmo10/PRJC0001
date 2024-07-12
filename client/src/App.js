import {Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import PatientLogin from "./pages/PatientLogin";
import PatientRegister from "./pages/PatientRegister";
import ErrorBoundary from "./helper classes/ErrorBoundary";
import PatientWelcomeScreen from "./pages/PatientWelcomeScreen";
import ForgotPassword from "./pages/ForgotPassword";
import CreateMedicalRecord from "./pages/CreateMedicalRecord"
import PatientProfile from "./pages/PatientProfile";
import Appointments from "./pages/Appointments";
import CreateAppointment from "./pages/CreateAppointment";

function App() {
  return (
    <ErrorBoundary fallback="error occured">
        <div className="App">
          <ToastContainer position="top-center" />
            <Routes>
             <Route exact path="/" element= { <PatientLogin/> } />
             <Route path="/PatientRegister" element= { <PatientRegister/> } />
             <Route path="/PatientWelcomeScreen/:id" element={ <PatientWelcomeScreen/> } />
             <Route path="/ForgotPassword" element={ <ForgotPassword/> } />
             <Route path="/CreateMedicalRecord" element={ <CreateMedicalRecord/> } />
             <Route path="/PatientProfile/:id" element={ <PatientProfile/> } />
             <Route path="/Appointments/:id" element={ <Appointments/> } />
             <Route path="/CreateAppointment/:id" element={ <CreateAppointment/> } />
            </Routes>
        </div>
    </ErrorBoundary>
  );
}

export default App;
