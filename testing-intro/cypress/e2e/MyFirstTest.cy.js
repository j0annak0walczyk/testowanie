/// <reference types="Cypress" />

describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("passes", () => {
    cy.contains("h1", /InTro/i).should("be.visible");
    cy.get("[data-cy='testid']").contains("st").should("be.visible");
    cy.contains("button", /click me/i).click();
    cy.get("button").contains("You clicked me").should("be.disabled");
  });

  it("checkbox test", () => {
    cy.get(":nth-child(2) > input").as("checkbox").click();
    cy.get("@checkbox").should("be.checked");
  });

  it("password validator", () => {
    cy.get(":nth-child(3) > input").as("password").type("blablabla");
    // cy.get("@password").contains("blabla");
  });
});
