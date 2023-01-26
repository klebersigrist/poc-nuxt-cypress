import Chainable = Cypress.Chainable;
import AUTWindow = Cypress.AUTWindow;

class HomePage {
  goToHomepage(): Chainable<AUTWindow> {
    return cy.visit('http://localhost:3000/');
  }

  boxCatFacts(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-test-id="box-cat-facts"]');
  }

  alertCatFactsError(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-test-id="alert-cat-facts-error"]');
  }
}

export default HomePage;
