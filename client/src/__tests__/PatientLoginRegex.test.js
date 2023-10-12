test("The name regular expression", ()=> {

    const name_regex = /^[A-Z]{1}[a-z]+$/;
    const name = "Sandi";

    expect(name).toMatch(name_regex);
});

test("The name regular expression with all capital letters", ()=> {

    const name_regex = /^[A-Z]{1}[a-z]+$/;
    const name = "SANDI";

    expect(name).not.toMatch(name_regex);
})

test("The name regular expression without capital letter", ()=> {

    const name_regex = /^[A-Z]{1}[a-z]+$/;
    const name = "sandi";

    expect(name).not.toMatch(name_regex);
});

test("The name regular expression with digit at start", ()=> {

    const name_regex = /^[A-Z]{1}[a-z]+$/;
    const name = "1Sandi";

    expect(name).not.toMatch(name_regex);
});

test("The name regular expression with a special character at end", ()=> {

    const name_regex = /^[A-Z]{1}[a-z]+$/;
    const name = "Sandi@";

    expect(name).not.toMatch(name_regex);
});

test("The name regular expression with a special character in between", ()=> {

    const name_regex = /^[A-Z]{1}[a-z]+$/;
    const name = "San@di";

    expect(name).not.toMatch(name_regex);
});

test("The surname regular expression", ()=> {

    const surname_regex = /^[A-Za-z]'?[a-z]+([\s | -][A-Za-z][a-z]+)*[a-z]$/
    const surname = "Zulu";

    expect(surname).toMatch(surname_regex);
});

test("The surname regular expression for surnames with apostrophe", ()=> {

    const surname_regex = /^[A-Za-z]'?[a-z]+([\s | -][A-Za-z][a-z]+)*[a-z]$/
    const surname = "O'neil";

    expect(surname).toMatch(surname_regex);
});

test("The surname regular expression for surnames with space", ()=> {

    const surname_regex = /^[A-Za-z]'?[a-z]+([\s | -][A-Za-z][a-z]+)*[a-z]$/
    const surname = "Zulu Nkambule";

    expect(surname).toMatch(surname_regex);
});

test("The surname regular expression for surnames without space", ()=> {

    const surname_regex = /^[A-Za-z]'?[a-z]+([\s | -][A-Za-z][a-z]+)*[a-z]$/
    const surname = "ZuluNkambule";

    expect(surname).not.toMatch(surname_regex);
});

test("The surname regular expression for surnames with double spaces", ()=> {

    const surname_regex = /^[A-Za-z]'?[a-z]+([\s | -][A-Za-z][a-z]+)*[a-z]$/
    const surname = "Zulu Nkambule Mzilikazi";

    expect(surname).toMatch(surname_regex);
});

test("The surname regular expression for surnames without double spaces", ()=> {

    const surname_regex = /^[A-Za-z]'?[a-z]+([\s | -][A-Za-z][a-z]+)*[a-z]$/
    const surname = "ZuluNkambuleMzilikazi";

    expect(surname).not.toMatch(surname_regex);
});

test("The surname regular expression for surnames with a space and hyphen", ()=> {

    const surname_regex = /^[A-Za-z]'?[a-z]+([\s | -][A-Za-z][a-z]+)*[a-z]$/
    const surname = "John Doe-Smith";

    expect(surname).toMatch(surname_regex);
});

test("The surname regular expression for surnames with a special character, space and hyphen", ()=> {

    const surname_regex = /^[A-Za-z]'?[a-z]+([\s | -][A-Za-z][a-z]+)*[a-z]$/
    const surname = "John&Doe-Smith";

    expect(surname).not.toMatch(surname_regex);
});

test("The surname regular expression for surnames with hyphen", ()=> {

    const surname_regex = /^[A-Za-z]'?[a-z]+([\s | -][A-Za-z][a-z]+)*[a-z]$/
    const surname = "Zulu-Nkambule";

    expect(surname).toMatch(surname_regex);
});

test("The surname regular expression for surnames that start with number", ()=> {

    const surname_regex = /^[A-Za-z]'?[a-z]+([\s | -][A-Za-z][a-z]+)*[a-z]$/
    const surname = "2ohn Doe-Smith";

    expect(surname).not.toMatch(surname_regex);
});

test("The surname regular expression for surnames ending with apostrophe", ()=> {

    const surname_regex = /^[A-Za-z]'?[a-z]+([\s | -][A-Za-z][a-z]+)*[a-z]$/
    const surname = "O'";

    expect(surname).not.toMatch(surname_regex);
});

test("The surname regular expression for surname with random letters", ()=> {

    const surname_regex = /^[A-Za-z]'?[a-z]+([\s | -][A-Za-z][a-z]+)*[a-z]$/
    const surname = "John 65$%^Kgdg (HRY)e";

    expect(surname).not.toMatch(surname_regex);
});
