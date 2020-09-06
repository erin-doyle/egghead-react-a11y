beforeEach(() => {
    cy.visit('http://localhost:3000/login');
    cy.injectAxe();
});

it('should not violate accessibility rules', () => {
    cy.checkA11y();
});
