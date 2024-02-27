import React from 'react'
import {Routes, Route } from "react-router-dom";
import ErrorBoundary from '../helper classes/ErrorBoundary';
import PatientLogin from './PatientLogin';
import PatientRegister from './PatientRegister';

function Pages() {
  return (
    <ErrorBoundary>
    <Routes>
        <Route exact path="/" element= { <PatientLogin/> } />
        <Route path="/PatientRegister" element= { <PatientRegister/> } />
    </Routes>
    </ErrorBoundary>
  )
}

export default Pages;