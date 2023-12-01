class PatientRegex{
    constructor(){
        this.name_pattern = /^[A-Z]([a-z]{2,30})$/;
        this.surname_pattern = /^[A-Z][a-z]{2,20}([\s | -][A-Z][a-z]{2,20}){0,2}/;
        this.id_pattern = /^[0-9]{13}$/;
        this.password_pattern = /^[A-Z | a-z | 0-9]{6,9}$/;
        this.birthdate_pattern = /^[1][89][0-9]{2} | ^[2][0][0-9]{2}/;
        this.cellphone_pattern = /^[\+][0-9]{11}$ | ^[0][0-9]{10}$/;
        this.email_pattern = /^[A-Za-z][A-Za-z0-9]{2,20}([.][0-9A-Za-z]{2,30})?[@][a-z]{2,30}[.][com|org|co.za]/;
        this.generic_pattern = /^[A-Z][a-z]{2,20}((\s[A-Z][a-z]{2,20}){1,3})$/;
        this.postal_pattern = /^[0-9]{4}$/;
    }

    getNamePattern(){
        return this.name_pattern;
    }

    getSurnamePattern(){
        return this.surname_pattern;
    }

    getIdPattern(){
        return this.id_pattern;
    }

    getPasswordPattern(){
        return this.password_pattern;
    }

    getBirthdatePattern(){
        return this.birthdate_pattern;
    }

    getCellphonePattern(){
        return this.cellphone_pattern;
    }

    getEmailPattern(){
        return this.email_pattern;
    }

    getGenericPattern(){
        return this.generic_pattern;
    }

    getPostalPattern(){
        return this.postal_pattern;
    }

    validateName(name){
        this.name_pattern.test(name);
    }

    validateSurname(surname){
        this.surname_pattern.test(surname);
    }

    validateId(id){
        this.id_pattern.test(id);
    }

    validateBirthdate(birthdate){
        this.birthdate_pattern.test(birthdate);
    }

    validatePassword(password){
        this.password_pattern.test(password);
    }

    validateCellphone(cellphone){
        this.cellphone_pattern.test(cellphone);
    }

    validateEmail(email){
        this.email_pattern.test(email);
    }

    validatePostalCode(postal){
        this.postal_pattern.test(postal);
    }

    validateGeneric(gen){
        this.generic_pattern.test(gen);
    }
}

export default PatientRegex