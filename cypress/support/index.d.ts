/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        pageOn(): Chainable<void>;
        assertTitle(title: String): Chainable<void>;
        assrtBtnHome(): Chainable<void>;
        logo(): Chainable<void>;
        goToSignup(titlePage: String): Chainable<void>;
        assertTitleFildset(txtTitle: String): Chainable<void>;
        inputTexts(inputName: String, txt: String): Chainable<void>;
        btnCEP(txtBtn: String): Chainable<void>;
        clickActivity(service: String): Chainable<void>;
        insertFile(imgName: String)
        activiSelected(serviceActv: String): Chainable<void>;
        submitBtn(): Chainable<void>;
        submitSuccess(titleSuccess: String, textSuccess: String): Chainable<void>;
        inputValue(key_addr: String, value_addr: String): Chainable<void>;
        alertErr(txtErr: String): Chainable<void>;
        allInputPerson(person: String): Chainable<void>;
        allInputAddress(address: String): Chainable<void>;
        choiseActivity(choiseActv: String): Chainable<void>;
        assertActivitiesSelected(activSelect: String): Chainable<void>;
        assertUploadFile(fileName: String): Chainable<void>;
        assertAllalertErr(err: String): Chainable<void>;


    }
}