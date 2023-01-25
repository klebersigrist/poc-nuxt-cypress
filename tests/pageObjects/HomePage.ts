class HomePage {
    goToHomepage() {
        return cy.visit('http://localhost:3000/');
    }

    boxCatFacts() {
        return cy.get('[data-test-id="box-cat-facts"]');
    }
}

export default HomePage;
