
describe('template spec', () => {

  it('deve validar a home', () => {
    
    cy.pageOn()
    cy.logo();
    cy.assertTitle('Cuidado e diversão em cada passo')
    cy.asstBtnHome('Quero ser Dog Walker');

  })
})