import axios from 'axios';

class AddPatientRegistrationDetails {
    constructor() {
    }

    registerPatient = async (file, id, password)=> {
        await axios.post(`http://localhost:8080/patient/register`, file, {
        headers: {
        'Content-Type' : "multipart/form-data",
        }
        }).then ((response) => {
            if(response.data){
                this.addPatientCredentials(id,password);
            } else {
                window.alert("Registration failed");
            }
        }).catch((err) => {
            console.log(err.response.data);
        });
    }

    addPatientCredentials = async (id,password)=> {
        await axios.post(`http://localhost:8080/patient/addCredentials`,null,{
        params : {
        id : id,
        password: password
        }
       }).then(() => {
            console.log("Patient credentials stored successfully");
       }).catch((err) => {
            console.log(err.response.data);
       });
    }
}

export default AddPatientRegistrationDetails;