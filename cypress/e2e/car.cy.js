/// <reference types="Cypress" />

describe('Login to CarConfig', () => {
  it('logs in with correct credentials', () => {
    cy.visit('http://car.keyword-driven.de')
    cy.get('#input_username').type('admin')
    cy.get('#input_password').type('@RBTFRMWRK@')
    cy.get('#button_login').click()
    cy.url().should('contain', 'http://car.keyword-driven.de/list' )
  })
})