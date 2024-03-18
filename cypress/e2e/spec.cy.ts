import { createTimings } from "../support/timings";

createTimings();

describe("performance", () => {
  it("bob ross", () => {
    cy.visit("localhost:8080");
    cy.findByText("Joshua Eddy").should("be.visible");
  });
  it("dingo", () => {
    cy.visit("localhost:8080");
    cy.findByText("Joshua Eddy").should("be.visible");
  });
  it("frank", () => {
    cy.visit("localhost:8080");
    cy.findByText("Joshua Eddy").should("be.visible");
  });
  it("bob", () => {
    cy.visit("localhost:8080");
    cy.findByText("Joshua Eddy").should("be.visible");
  });
});
