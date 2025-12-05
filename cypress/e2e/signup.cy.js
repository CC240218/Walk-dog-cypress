import { person, address, file, fieldset, activity, success, alerts } from '../fixtures/dataForm.json'

describe('pagina do formulario', () => {


    beforeEach(() => {
        cy.goToSignup('Faça seu cadastro')
    })

    context('happy tests', () => {


        it('Deve preencher e enviar o formulario de cadastro', () => {

            cy.assertTitleFildset(fieldset.titleData)
            cy.allInputPerson(person)

            cy.assertTitleFildset(fieldset.titleData)
            cy.allInputAddress(address)

            cy.clickActivity(activity[0])
            cy.activiSelected(activity[0])

            cy.assertUploadFile(file.doc)
            cy.submitBtn();
            cy.submitSuccess(success.sccTitle, success.sccText)
        })

    })

    context('DDT tests', () => {

        activity.forEach((work) => {
            it(`Deve cadastrar com a atividade marcada em ${work}`, () => {

                cy.assertTitleFildset(fieldset.titleData)
                cy.allInputPerson(person)

                cy.assertTitleFildset(fieldset.titleAdress)
                cy.allInputAddress(address)

                cy.assertTitleFildset(fieldset.titleAtivities)
                cy.choiseActivity(work)
                cy.assertActivitiesSelected(work)
                cy.insertFile(file.doc)
                cy.submitBtn();

                cy.submitSuccess(success.sccTitle, success.sccText)

            })
        })

    });
    context('Validation errors', () => {

        it('Deve validar os erros de campos vazios', () => {
            cy.submitBtn();
            cy.assertAllalertErr(alerts)
        })

        it('Deve validar os erros de um CEP inválido', () => {
            cy.inputTexts('cep', '123456')
            cy.btnCEP(address.btnCep)
            cy.alertErr(alerts.invalCep)
        })
    })
})