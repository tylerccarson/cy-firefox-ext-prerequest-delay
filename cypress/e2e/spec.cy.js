/// <reference types="cypress" />
describe("page", () => {
  it("fetches text from API within 100ms", () => {
    cy.visit("/index.html");

    cy.get("button").click();

    cy.contains("Hello World!", {
      timeout: 100,
    });
  });
});
