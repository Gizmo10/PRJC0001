import PatientRegex from './PatientRegexClass';

class ValidateRegistration{

    constructor(){
        this.patient = new PatientRegex();
    }

    validateRegistrationName(name) {
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

    validateAll(state) {
        if(Object.keys(state).length === 0) {
            return false;
        }

        let {name, surname,id,birthdate,cellphone,email,password,rePassword,
        street,suburb,city,code,province,idF} = state;

        var is_valid_name = this.validateRegistrationName(name);
        console.log(`name: ${is_valid_name}`);
        var is_valid_surname = this.ValidateRegistrationSurname(surname);
        console.log(`surname: ${is_valid_surname}`);
        var is_valid_id = this.validateRegistrationId(id);
        console.log(`id: ${is_valid_id}`);
        var is_valid_birthdate = this.validateRegistrationBirthdate(birthdate);
        console.log(`birthdate: ${is_valid_birthdate}`);
        var id_matches_birthdate = this.validateRegistrationBirthdateMatchesId(id,birthdate);
        console.log(`birthdate matched id: ${id_matches_birthdate}`);
        var is_valid_cellphone = this.validateRegistrationCellphone(cellphone);
        console.log(`cellphone: ${is_valid_cellphone}`);
        var is_valid_email = this.validateRegistrationEmail(email);
        console.log(`email: ${is_valid_email}`);
        var is_valid_password = this.validateRegistrationPassword(password);
        console.log(`password: ${is_valid_password}`);
        var is_valid_repassword = this.validateRegistrationRePassword(rePassword);
        console.log(`repassword: ${is_valid_repassword}`);
        var password_matches_repassword = 
        this.validateRegistrationPasswordMatchesRetypedPassword(password,rePassword);
        console.log(`passwords match: ${password_matches_repassword}`);
        var is_valid_street = this.validateRegistrationStreet(street);
        console.log(`street: ${is_valid_street}`);
        var is_valid_suburb = this.validateRegistrationSuburb(suburb);
        console.log(`suburb: ${is_valid_suburb}`);
        var is_valid_city = this.validateRegistrationCity(city);
        console.log(`city: ${is_valid_city}`);
        var is_valid_code = this.validateRegistrationPostalCode(code);
        console.log(`code: ${is_valid_code}`);
        var is_valid_province = this.validateRegistrationProvince(province);
        console.log(`province: ${is_valid_province}`);
        var id_not_empty = idF.length != 0;
        console.log(`id file: ${id_not_empty}`);
        

        return (is_valid_name && is_valid_surname && is_valid_id && is_valid_birthdate
            && id_matches_birthdate && is_valid_cellphone && is_valid_email && is_valid_password
             && is_valid_repassword && password_matches_repassword && is_valid_street && is_valid_suburb
             && is_valid_city && is_valid_code && is_valid_province && id_not_empty
            );
    }
}

export default ValidateRegistration