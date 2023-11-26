import React from 'react'
import ErrorBoundary from './ErrorBoundary';

const PatientRegister = () => {
  const handleInputChange = (e) => {
    const { name, value} = e.target;
};

const handleSubmit = async (e) => {
  e.preventDefault();
};

  return (
    <div className="patientRegister">
      <form onSubmit={handleSubmit} >
        <section id="row">
        <ErrorBoundary fallback="error occured">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter valid name..."
          value={name || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="surname">Surname: </label>
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="Enter surname..."
          value={surname || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>
        </section>

        
        <section id="row">
        <ErrorBoundary fallback="error occured">
        <label htmlFor="id">Id Number: </label>
        <input
          type="text"
          id="id"
          name="id"
          placeholder="Enter valid Id number..."
          value={id || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="birthdate">Date Of Birth: </label>
        <input
          type="date"
          id="birthdate"
          name="birthdate"
          value={birthdate || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>
        </section>

        <section id="row">
        <ErrorBoundary fallback="error occured">
        <label htmlFor="cellphone">Cell Number: </label>
        <input
          type="text"
          id="cellphone"
          name="cellphone"
          placeholder="Enter valid cellphone number..."
          value={cellphone || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          name="email"
          value={email || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>
        </section>

        <section id="row">
        <ErrorBoundary fallback="error occured">
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Enter valid password..."
          value={password || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="re-password">Re-Type Password: </label>
        <input
          type="text"
          id="re-password"
          name="re-password"
          value={re-password || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>
        </section>

        <section id="row">
        <ErrorBoundary fallback="error occured">
        <label htmlFor="street">Street: </label>
        <input
          type="text"
          id="street"
          name="street"
          value={street || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="suburb">Suburb: </label>
        <input
          type="text"
          id="surbub"
          name="surbub"
          placeholder="suburb..."
          value={suburb || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>
        </section>
        
        <section id="row">
        <ErrorBoundary fallback="error occured">
        <label htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          name="city"
          value={city || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>

        <ErrorBoundary fallback="error occured">
        <label htmlFor="code">Postal Code: </label>
        <input
          type="text"
          id="code"
          name="code"
          value={code || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>
        </section>

        <section id="prov">
        <ErrorBoundary fallback="error occured">
        <label htmlFor="province">Province: </label>
        <input
          type="text"
          id="province"
          name="province"
          value={province || ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>
        </section>

        <section id="idF">
        <ErrorBoundary fallback="error occured">
        <label htmlFor="idF">Upload ID: </label>
        <input
          type="file"
          id="idF"
          name="idF"
          value={idF|| ""}
          onChange={handleInputChange}
        />
        </ErrorBoundary>
        </section>
        
      </form>
      </div>
  )
}

export default PatientRegister