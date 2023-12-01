import PatientRegex from '../helper classes/PatientRegexClass';

const patientRegex = new PatientRegex();
const id_regex = patientRegex.getIdPattern();
const password_regex = patientRegex.getPasswordPattern();

test("The id regular expression", ()=> {

    const id = "1234567891234";
    expect(id).toMatch(id_regex);
});

test("The id regular expression with less than 13 digits", ()=> {

    const id = "12345678";
    expect(id).not.toMatch(id_regex);
});

test("The id regular expression with more than 13 digits", ()=> {

    const id = "12345678912345";
    expect(id).not.toMatch(id_regex);
});

test("The id regular expression starts without a number", ()=> {

    const id = "s12345678";
    expect(id).not.toMatch(id_regex);
});

test("The id regular expression ends without a digit", ()=> {

    const id = "12345678@";
    expect(id).not.toMatch(id_regex);
});

test("The id regular expression with a character in between", ()=> {

    const id = "1234r6789";
    expect(id).not.toMatch(id_regex);
});

test("The password regular expression six characters", ()=> {

    const password = "A234cd";
    expect(password).toMatch(password_regex);
});

test("The password regular expression less than six characters", ()=> {

    const password = "Zulu3";
    expect(password).not.toMatch(password_regex);
});

test("The password regular expression nine characters", ()=> {

    const password = "1234ft789";
    expect(password).toMatch(password_regex);
});

test("The password regular expression with more than nine characters", ()=> {

    const password = "Z2345tr89u";
    expect(password).not.toMatch(password_regex);
});

test("The password regular expression starts with an illegal character", ()=> {

    const password = "@123456";
    expect(password).not.toMatch(password_regex);
});

test("The password regular expression ends with an illegal character", ()=> {

    const password = "12345ty-";
    expect(password).not.toMatch(password_regex);
});

test("The password regular expression contains an illegal character in between", ()=> {

    const password = "1234@6e";
    expect(password).not.toMatch(password_regex);
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
    expect(birthdate).toMatch(patientRegex.getBirthdatePattern());
})

test("The birthdate regular expression 21st century expression", ()=> {
    const birthdate = "2001";
    expect(birthdate).toMatch(patientRegex.getBirthdatePattern());
})









