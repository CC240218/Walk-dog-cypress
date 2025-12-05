// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />


// ---------------------------- HELPERS //
Cypress.Commands.add('goToSignup', (titlePage) => {
    cy.pageOn()
    cy.assrtBtnHome('Quero ser Dog Walker').click()
    cy.contains('h1', titlePage)
        .should('be.visible')
        .and('exist')
})//-----------------------------------------------------------



// ---------------------------- Localizadores da home  //
Cypress.Commands.add('pageOn', () => {
    cy.visit(`/`)
})
Cypress.Commands.add('assrtBtnHome', (txtBtn) => {
    cy.contains('strong', txtBtn).should('be.visible')
})//----------------------------------------------------------------------


// ----------------------------- Localizadores do signup  //
Cypress.Commands.add('btnCEP', (txtBtn) => {
    cy.get(`input[type="button"][value="${txtBtn}"]`)
        .click();
})
Cypress.Commands.add('clickActivity', (service) => {
    cy.get(`img[alt="${service}"]`).click()
})
Cypress.Commands.add('insertFile', (imgName) => {
    cy.get('input[type="file"]')
        .selectFile(`cypress/fixtures/${imgName}`, { force: true })

});

Cypress.Commands.add('activiSelected', (serviceActv) => {
    cy.contains('fieldset ul li[class="selected"]', serviceActv)
        .should('exist')
        .and('have.css', 'border-color', 'rgb(52, 130, 130)');
});

Cypress.Commands.add('submitBtn', () => {
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('submitSuccess', (titleSuccess, textSuccess) => {
    cy.get('#swal2-title')
        .should('have.text', titleSuccess)
        .parent()
        .find('#swal2-html-container')
        .should('have.text', textSuccess)
});

// ------------------------------ Comandos genericos reutilizaveis  //
Cypress.Commands.add('assertTitle', (title) => {
    cy.contains('h1', title).should('be.visible')
});
Cypress.Commands.add('assertTitleFildset', (txtTitle) => {
    cy.contains('fieldset h2', txtTitle)
        .should('be.visible')
});

Cypress.Commands.add('inputTexts', (inputName, txt) => {
    cy.get(`input[name="${inputName}"]`)
        .type(txt)

});
Cypress.Commands.add('inputValue', (key_addr, value_addr) => {
    cy.get(`input[name=${key_addr}]`)
        .should('have.value', value_addr)
})

// ------------------------------- Headers  //
Cypress.Commands.add('logo', () => {
    cy.get('img[alt="Walkdog"]')
        .should('be.visible')
});

Cypress.Commands.add('alertErr', (txtErr) => {
    cy.contains('span[class="alert-error"]', txtErr)
        .should('be.visible')
});


// ----------------- Digitando em todos os inputs de dados do usuário -----------------------
Cypress.Commands.add('allInputPerson', (person) => {
    let keysPson = Object.keys(person)

    keysPson.forEach((dt_k_pson) => {
        cy.inputTexts(dt_k_pson, person[dt_k_pson]);
    });
})// -------------------------------------------------------------------------------'-------


// ----------- Digitando em todos os inputs de endereços/Validando os inputs disabled value -
Cypress.Commands.add('allInputAddress', (address) => {
    let keysAddr = Object.keys(address)

    keysAddr.slice(0, 3).forEach((dt_k_addr) => {
        cy.inputTexts(dt_k_addr, address[dt_k_addr])
    });
    cy.btnCEP(address.btnCep);

    keysAddr.slice(3, 6).forEach((dt_k_disVal) => {
        cy.inputValue(dt_k_disVal, address[dt_k_disVal])
    });

})// ---------------------------------------------------'------------------------------------


// ----- Condições para clicar em uma ou mais atividades da seção Atividades extras ----------
Cypress.Commands.add('choiseActivity', (choiseActv) => {
    if (choiseActv === 'Cuidar e Adestrar') {
        const [txt1, txt2] = choiseActv.split(' e ');
        cy.clickActivity(txt1);
        cy.clickActivity(txt2);
    } else {
        cy.clickActivity(choiseActv);
    }
})//----------------------------------------------'--------------------------------------------

// ---- Condições para verificar se uma ou mais atividades foram selecionadas na seção Atividades extras
Cypress.Commands.add('assertActivitiesSelected', (activSelect) => {
    if (activSelect === 'Cuidar e Adestrar') {

        const [text1, text2] = activSelect.split(' e ');
        cy.activiSelected(text1);
        cy.activiSelected(text2);

    } else {
        cy.activiSelected(activSelect)
    }
})// -------------------------------------------------------------------------------------------s--------

// ------------------ Validar todos os erros de campos vazios -------------------------------------------
Cypress.Commands.add('assertAllalertErr', (err) => {
    let keysAlert = Object.keys(err)
    keysAlert.slice(0, 5).forEach((key_err) => {
        cy.alertErr(err[key_err])
    })
})// ----------------------------------------------------------------------------------------------------

// _---------------------------------- Validando se o arquivo fez upload --------------------------------
Cypress.Commands.add('assertUploadFile', (fileName) => {
    cy.insertFile(fileName)
        .parent().within(() => {
            cy.get('img').should('exist').and('be.visible')
        })
})// ----------------------------------------------------------------------------------------------------
