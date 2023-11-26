import React from 'react'
import { useParams } from 'react-router-dom'


function PatientWelcomeScreen() {

    const { id } = useParams();
  return (
    <div> { id } </div>
  )
}

export default PatientWelcomeScreen