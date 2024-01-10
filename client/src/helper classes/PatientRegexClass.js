class PatientRegex{
    constructor(){
        this.name_pattern = /^[A-Z]([a-z]{2,30})$/;
        this.surname_pattern = /^[A-Z][a-z]{0,20}([\s | -][A-Z][a-z]{2,20}){0,2}[a-z]$/;
        this.id_pattern = /^[0-9]{13}$/;
        this.password_pattern = /^[A-Z | a-z | 0-9]{6,9}$/;
        this.birthdate_pattern_1900 = /^[1][8 | 9][0-9]{2}/
        this.birthdate_pattern_2000 = /^[2][0][0-9]{2}/;
        this.cellphone_pattern_code = /^[\+][0-9]{11}$/;
        this.cellphone_pattern =  /^[0][0-9]{9}$/;
        this.email_pattern = /^[A-Z | a-z][A-Z | a-z |0-9]{2,20}([.][0-9 | A-Z | a-z]{2,30})?[@][a-z]{2,30}[.](com)$/;
        this.generic_pattern = /^[A-Z][a-z]{1,20}((\s[A-Z][a-z]{2,20}){0,3})$/;
        this.street_pattern = /^[0-9]{1,6}[A-Z | a-z]{0,2}((\s[A-Z][a-z]{2,20}){1,4})$/
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

    getBirthdatePattern1900(){
        return this.birthdate_pattern_1900;
    }

    getBirthdatePattern2000(){
        return this.birthdate_pattern_2000;
    }

    getCellphonePattern_code(){
        return this.cellphone_pattern_code;
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

    getStreetPattern(){
        return this.street_pattern;
    }

    getPostalPattern(){
        return this.postal_pattern;
    }

    validateName(name){
        return this.name_pattern.test(name);
    }

    validateSurname(surname){
       return this.surname_pattern.test(surname);
    }

    validateId(id){
       return this.id_pattern.test(id);
    }

    validateBirthdate1900(birthdate){
       return this.birthdate_pattern_1900.test(birthdate);
    }

    validateBirthdate2000(birthdate){
       return this.birthdate_pattern_2000.test(birthdate);
    }

    validatePassword(password){
       return this.password_pattern.test(password);
    }

    validateCellphone(cellphone){
       return this.cellphone_pattern.test(cellphone);
    }

    validateCellphoneCode(cellphone){
       return this.cellphone_pattern_code.test(cellphone);
    }


    validateEmail(email){
       return this.email_pattern.test(email);
    }

    validatePostalCode(postal){
       return this.postal_pattern.test(postal);
    }

    validateStreetName(street){
       return this.street_pattern.test(street);
    }

    validateGeneric(gen){
       return this.generic_pattern.test(gen);
    }
}

export default PatientRegex