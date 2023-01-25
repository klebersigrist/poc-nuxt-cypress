import HomePage from '@/pageObjects/HomePage';

describe('Home', () => {
    const homePage = new HomePage();

    before(() => {
        cy.mocksSetCollection('catfacts');
    });

    describe('Show cat facts when load home page', () => {
        context('Call cat facts API with success', () => {
            before(() => {
                cy.mocksUseRouteVariant('get-catfacts:success');
            });

            it('should show cat facts block', () => {
                // when
                homePage.goToHomepage();
                // then
                homePage.boxCatFacts().should('be.visible');
            });
        });

        context('Call cat facts API with error', () => {
            before(() => {
                cy.mocksUseRouteVariant('get-catfacts:error');
            });

            it('should not show cat facts block', () => {
                // when
                homePage.goToHomepage();
                // then
                homePage.boxCatFacts().should('not.exist');
            });
        });
    });
});

export {};
