declare namespace Cypress {
    interface Chainable<Subject = any> {
        setMobileViewport(): Chainable;
        setDesktopViewport(): Chainable;
    }
}
