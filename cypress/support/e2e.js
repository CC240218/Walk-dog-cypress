// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'


Cypress.Commands.add('Type_text', (name, type) => {

    cy.get(`input[name=${name}]`).type(type);
});

Cypress.Commands.add('Button_click', (nameButton) => {

    cy.get(`input[type="button"][value="${nameButton}"]`).click();
});

Cypress.Commands.add('Contains_value', (name, value) => {

    cy.get(`input[name=${name}]`).should('have.value', value);
});

Cypress.Commands.add('Extra_skil', (nameSkil) => {

    cy.get('.walker-service').parent().contains('span',nameSkil).click();
});

Cypress.Commands.add('Flag_option', (nameSkil) => {

    cy.get(`.selected img[alt=${nameSkil}]`).should('have.css','border','0px none rgb(52, 130, 130)');
});

Cypress.Commands.add('Fixe_file', (file) => {

    cy.get('input[accept="image/*"]').selectFile(`cypress/img/${file}`, {force: true})
});

Cypress.Commands.add('Submit_form', (nameButton) => {

    cy.contains('button[type=submit]', nameButton).click();
});

Cypress.Commands.add('noticeSubmit', (noticeText) => {

    cy.contains('h2', noticeText).should('be.visible');
});

Cypress.Commands.add('Alert_mensage', ( text) => {

    cy.contains('.alert-error', text).should('be.visible');
});