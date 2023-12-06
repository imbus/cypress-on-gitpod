export function openCarConfig() {
    cy.visit('http://car.keyword-driven.de')
}

export function login(username, password) {
    cy.get('#input_username').type(username)
    cy.get('#input_password').type(password)
    cy.get('#button_login').click()
}

export function verifyValidLogin() {
    cy.url().should('contain', 'http://car.keyword-driven.de/list' )
}

export function clickNext() {
    cy.get('.fa-chevron-right').click()
}

export function selectAccesory(accesory) {
    cy.get('#extraEquipmentColumnContent').contains(accesory).parent().find('input').check()
}