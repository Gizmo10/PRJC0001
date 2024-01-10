class test{
    constructor(){
        this.test_regex = /^[A-Z][a-z]{1}[.]$/
    }

    get_test_regex() {
        return this.test_regex;
    }

    validate_test_regex(word) {
        return this.test_regex.test(word);
    }
}

const testReg = new test();
console.log(!testReg.validate_test_regex("Aa."));
