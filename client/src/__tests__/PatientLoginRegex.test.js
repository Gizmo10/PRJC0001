import PatientRegex from '../helper classes/PatientRegexClass';

const patientRegex = new PatientRegex();

test("The id regular expression", ()=> {

    const id = "1234567891234";
    expect(id).toMatch(patientRegex.getIdPattern());
});

test("The id regular expression with less than 13 digits", ()=> {

    const id = "12345678";
    expect(id).not.toMatch(patientRegex.getIdPattern());
});

test("The id regular expression with more than 13 digits", ()=> {

    const id = "12345678912345";
    expect(id).not.toMatch(patientRegex.getIdPattern());
});

test("The id regular expression starts without a number", ()=> {

    const id = "s12345678";
    expect(id).not.toMatch(patientRegex.getIdPattern());
});

test("The id regular expression ends without a digit", ()=> {

    const id = "12345678@";
    expect(id).not.toMatch(patientRegex.getIdPattern());
});

test("The id regular expression with a character in between", ()=> {

    const id = "1234r6789";
    expect(id).not.toMatch(patientRegex.getIdPattern());
});

test("The password regular expression six characters", ()=> {

    const password = "A234cd";
    expect(password).toMatch(patientRegex.getPasswordPattern());
});

test("The password regular expression less than six characters", ()=> {

    const password = "Zulu3";
    expect(password).not.toMatch(patientRegex.getPasswordPattern());
});

test("The password regular expression nine characters", ()=> {

    const password = "1234ft789";
    expect(password).toMatch(patientRegex.getPasswordPattern());
});

test("The password regular expression with more than nine characters", ()=> {

    const password = "Z2345tr89u";
    expect(password).not.toMatch(patientRegex.getPasswordPattern());
});

test("The password regular expression starts with an illegal character", ()=> {

    const password = "@123456";
    expect(password).not.toMatch(patientRegex.getPasswordPattern());
});

test("The password regular expression ends with an illegal character", ()=> {

    const password = "12345ty-";
    expect(password).not.toMatch(patientRegex.getPasswordPattern());
});

test("The password regular expression contains an illegal character in between", ()=> {

    const password = "1234@6e";
    expect(password).not.toMatch(patientRegex.getPasswordPattern());
});

test("The name regular expression starts with a capital letter", ()=> {
    const name = "Lulo";
    expect(name).toMatch(patientRegex.getNamePattern());
})

test("The name regular expression begins with an illegal expression", ()=> {
    const name = "lulo";
    expect(name).not.toMatch(patientRegex.getNamePattern());
})

test("The name regular expression contains an illegal expression", ()=> {
    const name = "Lu lo";
    expect(name).not.toMatch(patientRegex.getNamePattern());
})

test("The name regular expression ends with an illegal expression", ()=> {
    const name = "Lul2";
    expect(name).not.toMatch(patientRegex.getNamePattern());
})

test("The surname regular expression with a single word", ()=> {
    const surname = "Lulo";
    expect(surname).toMatch(patientRegex.getSurnamePattern());
})

test("The surname regular expression with a space between two words", ()=> {
    const surname = "Lulo Gizmo";
    expect(surname).toMatch(patientRegex.getSurnamePattern());
})

test("The surname regular expression with a dash between two words", ()=> {
    const surname = "Lulo-Gizmo";
    expect(surname).toMatch(patientRegex.getSurnamePattern());
})

test("The surname regular expression with spaces between three words", ()=> {
    const surname = "Lulo Gizmo Test";
    expect(surname).toMatch(patientRegex.getSurnamePattern());
})

test("The surname regular expression with a space and hyphen between three words", ()=> {
    const surname = "Lulo-Gizmo Test";
    expect(surname).toMatch(patientRegex.getSurnamePattern());
})

test("The surname regular expression starts with an illegal expression", ()=> {
    const surname = "lulo";
    expect(surname).not.toMatch(patientRegex.getSurnamePattern());
})

test("The surname regular expression contains an illegal expression", ()=> {
    const surname = "Lulo Giz@o";
    expect(surname).not.toMatch(patientRegex.getSurnamePattern());
})

test("The surname regular expression ends with an illegal expression", ()=> {
    const surname = "Lulo-Gizmo TesT";
    expect(surname).not.toMatch(patientRegex.getSurnamePattern());
})

test("The birthdate regular expression 20th century expression", ()=> {
    const birthdate = "1976";
    expect(birthdate).toMatch(patientRegex.getBirthdatePattern1900());
})

test("The birthdate regular expression 21st century expression", ()=> {
    const birthdate = "2001";
    expect(birthdate).toMatch(patientRegex.getBirthdatePattern2000());
})

test("The birthdate regular expression starts with an illegal expression 1900s", ()=> {
    const birthdate = "2976";
    expect(birthdate).not.toMatch(patientRegex.getBirthdatePattern1900());
})

test("The birthdate regular expression contains an illegal expression 1900s", ()=> {
    const birthdate = "1676";
    expect(birthdate).not.toMatch(patientRegex.getBirthdatePattern1900());
})

test("The birthdate regular expression starts with an illegal expression 2000s", ()=> {
    const birthdate = "3001";
    expect(birthdate).not.toMatch(patientRegex.getBirthdatePattern2000());
})

test("The birthdate regular expression contains an illegal expression 2000s", ()=> {
    const birthdate = "2@01";
    expect(birthdate).not.toMatch(patientRegex.getBirthdatePattern2000());
})

test("The cellphone regular expression starts with country code", ()=> {
    const cellphone = "+27735001123";
    expect(cellphone).toMatch(patientRegex.getCellphonePattern_code());
})

test("The cellphone regular expression starts with zero", ()=> {
    const cellphone = "0735001123";
    expect(cellphone).toMatch(patientRegex.getCellphonePattern());
})

test("The cellphone regular expression starts with country code and contains illegal expression", ()=> {
    const cellphone = "+2773%001123";
    expect(cellphone).not.toMatch(patientRegex.getCellphonePattern_code());
})

test("The cellphone regular expression starts with zero and contains illegal expression", ()=> {
    const cellphone = "073%001123";
    expect(cellphone).not.toMatch(patientRegex.getCellphonePattern());
})

test("The cellphone regular expression starts with country code and illegal size", ()=> {
    const cellphone = "+277300112323";
    expect(cellphone).not.toMatch(patientRegex.getCellphonePattern_code());
})

test("The cellphone regular expression starts with zero and illegal size", ()=> {
    const cellphone = "073500112345";
    expect(cellphone).not.toMatch(patientRegex.getCellphonePattern());
})

test("The email regular expression", ()=> {
    const email = "gizmo19@gmail.com";
    expect(email).toMatch(patientRegex.getEmailPattern());
})

test("The email regular expression with period", ()=> {
    const email = "gizmo.sudo19@gmail.com";
    expect(email).toMatch(patientRegex.getEmailPattern());
})

test("The email regular expression starts with number", ()=> {
    const email = "19gizmo@gmail.com";
    expect(email).not.toMatch(patientRegex.getEmailPattern());
})

test("The email regular expression repeats periods", ()=> {
    const email = "gizmo.sudo.test@gmail.com";
    expect(email).not.toMatch(patientRegex.getEmailPattern());
})


test("The email regular expression without a handle", ()=> {
    const email = "gizmo19gmail.com";
    expect(email).not.toMatch(patientRegex.getEmailPattern());
})

test("The email regular expression ends with period", ()=> {
    const email = "gizmo19@gmail.";
    expect(email).not.toMatch(patientRegex.getEmailPattern());
})

test("The postal regular expression", ()=> {
    const postalCode = "1234";
    expect(postalCode).toMatch(patientRegex.getPostalPattern());
})

test("The postal regular expression with an illegal expression", ()=> {
    const postalCode = "12&4";
    expect(postalCode).not.toMatch(patientRegex.getPostalPattern());
})

test("The postal regular expression with an illegal length", ()=> {
    const postalCode = "12343";
    expect(postalCode).not.toMatch(patientRegex.getPostalPattern());
})

test("The generic regular expression without space", ()=> {
    const gen = "Gizmo";
    expect(gen).toMatch(patientRegex.getGenericPattern());
})

test("The generic regular expression with space", ()=> {
    const gen = "Gizmo Test";
    expect(gen).toMatch(patientRegex.getGenericPattern());
})

test("The generic regular expression with illegal capitalisation", ()=> {
    const gen = "gizmo Test";
    expect(gen).not.toMatch(patientRegex.getGenericPattern());
})

test("The generic regular expression with an illegal character", ()=> {
    const gen = "Giz=o";
    expect(gen).not.toMatch(patientRegex.getGenericPattern());
})
















