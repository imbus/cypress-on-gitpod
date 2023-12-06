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
Cypress.Commands.add("login", (user, password) => {
    cy.get('#input_username').type(user)
    cy.get('#input_password').type(password)
    cy.get('#button_login').click()
 })

Cypress.Commands.add("openCarConfig", () => cy.visit('http://car.keyword-driven.de'))
Cypress.Commands.add("verifyValidLogin", () => cy.url().should('contain', 'http://car.keyword-driven.de/list' ))

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
