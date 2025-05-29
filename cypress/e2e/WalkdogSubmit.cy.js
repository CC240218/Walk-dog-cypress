/// <reference types="cypress" />

describe('Formulario de cadastro Walkdog', () => {

  let data;
  beforeEach(() => {
    cy.visit('https://walkdog.vercel.app/signup');
    cy.get('form h1').should('have.text','Faça seu cadastro');
  });
 
  before(() => {
    cy.fixture('candidate').then(candidate => {  data = candidate})
  });

  context('Validação', () => {

    it('Deve notificar quando os campos obrigatorios estão vazios', () => {

      cy.Submit_form('Cadastrar');
      cy.Alert_mensage(data.notification.name);
      cy.Alert_mensage(data.notification.email);
      cy.Alert_mensage(data.notification.cpf);
      cy.Alert_mensage(data.notification.cep1);
      cy.Alert_mensage(data.notification.addressNumber);
      cy.Alert_mensage(data.notification.file);

    });

    it('Deve notificar um CEP invalido', () => {

      cy.Type_text('cep', '1234');
      cy.Button_click('Buscar CEP');
      cy.Alert_mensage(data.notification.cep2);
    });

  });

  context('Dados', () => {

    it('Deve preencher a seção DADOS', () => {
    
      cy.Type_text('name', data.personal.name);
      cy.Type_text('email', data.personal.email);
      cy.Type_text('cpf', data.personal.cpf);

      cy.Contains_value('name', data.personal.name);
      cy.Contains_value('email', data.personal.email);
      cy.Contains_value('cpf', data.personal.cpf);

    });

  });

  context('Endereço', () => {

    it('Deve preencher a seção ENDEREÇO', () => {

      cy.Type_text('cep', data.personal.cep);
      cy.Button_click('Buscar CEP');
      
      cy.Type_text('addressNumber', data.personal.addressNumber);
      cy.Type_text('addressDetails', data.personal.addressDetails);

      cy.Contains_value('cep', data.personal.cep);
      cy.Contains_value('addressStreet', data.personal.addressStreet);
      cy.Contains_value('addressNumber', data.personal.addressNumber);
      cy.Contains_value('addressDetails', data.personal.addressDetails);
      cy.Contains_value('addressDistrict', data.personal.addressDistrict);
      cy.Contains_value('addressCityUf', data.personal.addressCityUf);

    });

  });

  context('Atividade extras', () => {

    it('Deve escolher ao menos uma atividade', () => {

      cy.Extra_skil(data.personal.activity2);
      cy.Flag_option(data.personal.activity2);

    });

  });

  context('Anexar arquivo', () => {

    it('Deve anexar um aqrquivo', () => {

      cy.Fixe_file('serj.jpeg');
    });
  });

  context('submit form', () => {

    it('Deve finalizar todo o cadastro', () => {

      cy.Type_text('name', data.personal.name);
      cy.Type_text('email', data.personal.email);
      cy.Type_text('cpf', data.personal.cpf);

      cy.Type_text('cep', data.personal.cep);
      cy.Button_click('Buscar CEP');

      cy.Type_text('addressNumber', data.personal.addressNumber);
      cy.Type_text('addressDetails', data.personal.addressDetails);

      cy.Extra_skil(data.personal.activity2);

      cy.Fixe_file('serj.jpeg');

      cy.Submit_form('Cadastrar');
      cy.noticeSubmit('Obrigado!');
    });
  });


})