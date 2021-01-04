describe('MS login', function() {
  it('Logs in', function() {
    cy.visit('https://bing.com')
    cy.get('#id_a').click();
    cy.get('#i0116').click({ force: true });
    cy.get('#i0116').type(Cypress.env('ms_user'),{ force: true });
    cy.get('#idSIButton9').click({ force: true });
    cy.get('#i0118').click({ force: true });
    cy.get('#i0118').type(Cypress.env('ms_pass'),{ force: true });
    cy.get('#idSIButton9').click({ force: true });
    cy.get('#sb_form_q').click({ force: true });
    cy.get('#sb_form_q').type('test',{ force: true });
    cy.get('#sb_form_go').click({ force: true });
    cy.get('#sb_form').submit({ force: true });
    cy.url().should('contains', 'https://www.bing.com/search');
    cy.url().should('contains', 'https://login.microsoftonline.com/common/oauth2/authorize');
    cy.url().should('contains', 'https://www.bing.com/orgid/idtoken/conditional');
  })
})