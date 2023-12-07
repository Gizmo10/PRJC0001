import PatientRegex from '../helper classes/PatientRegexClass';

class ValidateRegistration{
    constructor(){
        this.patient = new PatientRegex();
    }

    validRegistrationName(name) {
        if(!this.patient.validateName(name)) {
            const elem = document.getElementById("name");
            elem.innerText = "The name format is not valid";
            return false;
        } 
        return true;
    }

    ValidateRegistrationSurname(surname) {
        if(!this.patient.validateSurname(surname)){
            const elem = document.getElementById("surname");
            elem.innerText = "The surname format is not valid";
            return false;
        }
        return true;
    }

    validateRegistrationId(id) {
        if(!this.patient.validateId(id)){
            const elem = document.getElementById("id");
            elem.innerText = "The id format is not valid";
            return false;
        }
        return true;
    }

    validateRegistrationBirthdate(birthdate) {
        if(!(this.patient.validateBirthdate1900(birthdate) || 
        this.patient.validateBirthdate2000(birthdate))){
            window.alert("Invalid date");
            return false;
        }
        return true;
    }

    validateRegistrationBirthdateMatchesId(id,birthdate) {
        var id_year = id.substring(0,2);
        var id_month = id.substring(2,4);
        var id_day = id.substring(4,6);
        var birthdate_year = birthdate.substring(2,4);
        var birthdate_month = birthdate.substring(5,7);
        var birthdate_day = birthdate.substring(8);

        if(!(id_year === birthdate_year && id_month === birthdate_month
        && id_day === birthdate_day)) {
            window.alert("The id does not match the birthdate");
            return false;
        }
        return true;
    }

    validateRegistrationCellphone(cellphone) {
        if(!(this.patient.validateCellphone(cellphone) ||
        this.patient.validateCellphoneCode(cellphone))){
            const elem = document.getElementById("cellphone");
            elem.innerText = "The cellphone format is not valid";
            return false;
        }
        return true;
    }

    validateRegistrationEmail(email) {
        if(!this.patient.validateEmail(email)){
            const elem = document.getElementById("email");
            elem.innerText = "The email format is not valid";
            return false;
        }
        return true;
    }

    validateRegistrationPassword(password) {
        if(!this.patient.validatePassword(password)){
            const elem = document.getElementById("password");
            elem.innerText = "The password format is not valid";
            return false;
        }
        return true;
    }

    validateRegistrationRePassword(password) {
        if(!this.patient.validatePassword(password)){
            const elem = document.getElementById("rePassword");
            elem.innerText = "The password format is not valid";
            return false;
        }
        return true;
    }

    validateRegistrationPasswordMatchesRetypedPassword(password,retyped){
        if(!(password === retyped)) {
            const elem = document.getElementById("rePassword");
            elem.innerText = "Passwords must match";
            return false;
        }
        return true;
    }

    validateRegistrationStreet(street) {
        if(!this.patient.validateStreetName(street)){
            const elem = document.getElementById("street");
            elem.innerText = "The street format is not valid";
            return false;
        }
        return true;
    }

    validateRegistrationSuburb(suburb) {
        if(!this.patient.validateGeneric(suburb)){
            const elem = document.getElementById("suburb");
            elem.innerText = "The suburb format is not valid";
            return false;
        }
        return true;
    }
    
    validateRegistrationCity(city) {
        if(!this.patient.validateGeneric(city)){
            const elem = document.getElementById("city");
            elem.innerText = "The city format is not valid";
            return false;
        }
        return true;
    }

    validateRegistrationProvince(province) {
        if(!this.patient.validateGeneric(province)){
            const elem = document.getElementById("province");
            elem.innerText = "The province format is not valid";
            return false;
        }
        return true;
    }

    validateRegistrationPostalCode(postal) {
        if(!this.patient.validatePostalCode(postal)){
            const elem = document.getElementById("code");
            elem.innerText = "The postal code format is not valid";
            return false;
        }
        return true;
    }
}

export default ValidateRegistration