const id_regex = /^[0-9]{1}([0-9]{12})$/;
const password_regex = /^[A-Z | a-z | 0-9]{1}([A-Z | a-z | 0-9]{5,8})$/;

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

