/// <reference types="Cypress" />

describe('Login to CarConfig', () => {
  it('logs in with correct credentials', () => {
    cy.openCarConfig()
    cy.login('schulung02', '@RBTFRMWRK@')
    cy.verifyValidLogin()
    cy.get('a[href="/config/basemodel"]').click()
    cy.get('select').select('I5')
    cy.get('.fa-chevron-right').click()
    cy.get('label').contains('Gomera').click()
    cy.get('.fa-chevron-right').click()
    const accesories = ['ABS', 'Beheizbarer Außenspiegel', 'Radio mit CD-Wechsler']
    accesories.forEach(e => cy.get('#extraEquipmentColumnContent').contains(e).parent().find('input').click())
    cy.get('.fa-chevron-right').click()
    const price = '31,916.00'
    cy.get('h6').contains('Gesamtpreis:').should('contain', price)
  })
})