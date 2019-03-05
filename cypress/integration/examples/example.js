describe('My 1st test', () => {
  it('Visits the kitchen sink', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type').click();

    cy.url().should('contain', '/commands/actions');

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
  })
})