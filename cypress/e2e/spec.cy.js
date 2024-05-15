/// <reference types="cypress" />
describe('page', () => {

  // 1: request with the bug
  it('works', () => {
    cy.visit('https://example.cypress.io')
  })

  // 2: same request from the webpage, NO bug

})
