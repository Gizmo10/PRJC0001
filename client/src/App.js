import {Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import PatientLogin from "./pages/PatientLogin";
import PatientRegister from "./pages/PatientRegister";
import ErrorBoundary from "./pages/ErrorBoundary";
import PatientWelcomeScreen from "./pages/PatientWelcomeScreen";

function App() {
  return (
    <ErrorBoundary fallback="error occured">
        <div className="App">
          <ToastContainer position="top-center" />
            <Routes>
             <Route exact path="/" element= { <PatientLogin/> } />
             <Route path="/PatientRegister" element= { <PatientRegister/> } />
             <Route path="/PatientWelcomeScreen" element={ <PatientWelcomeScreen/> } />
            </Routes>
        </div>
    </ErrorBoundary>
  );
}

export default App;
