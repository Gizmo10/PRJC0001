class PatientRegex{
    constructor(){
        this.name_pattern = /^[A-Z]([a-z]{2,30})$/;
        this.surname_pattern = /^[A-Z][a-z]{2,20}([\s | -][A-Z][a-z]{2,20}){0,2}[a-z]$/;
        this.id_pattern = /^[0-9]{13}$/;
        this.password_pattern = /^[A-Z | a-z | 0-9]{6,9}$/;
        this.birthdate_pattern_1900 = /^[1][8 | 9][0-9]{2}/
        this.birthdate_pattern_2000 = /^[2][0][0-9]{2}/;
        this.cellphone_pattern_code = /^[\+][0-9]{11}$/;
        this.cellphone_pattern =  /^[0][0-9]{9}$/;
        this.email_pattern = /^[A-Z | a-z][A-Z | a-z |0-9]{2,20}([.][0-9 | A-Z | a-z]{2,30})?[@][a-z]{2,30}[.](com)$/;
        this.generic_pattern = /^[A-Z][a-z]{1,20}((\s[A-Z][a-z]{2,20}){0,3})$/;
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

    validateBirthdate1900(birthdate){
        this.birthdate_pattern1900.test(birthdate);
    }

    validateBirthdate2000(birthdate){
        this.birthdate_pattern2000.test(birthdate);
    }

    validatePassword(password){
        this.password_pattern.test(password);
    }

    validateCellphone(cellphone){
        this.cellphone_pattern.test(cellphone);
    }

    validateCellphoneCode(cellphone){
        this.cellphone_pattern_code.test(cellphone);
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