/// <reference types="Cypress" />

describe('Login to CarConfig', () => {
  it('logs in with correct credentials', () => {
    cy.visit('http://car.keyword-driven.de')
    cy.get('#input_username').type('schulung20')
    cy.get('#input_password').type('@RBTFRMWRK@')
    cy.get('#button_login').click()
    cy.url().should('contain', 'http://car.keyword-driven.de/list' )
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