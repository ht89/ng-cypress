/// <reference types="Cypress" />


describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');

    cy.get('body')
      .find('ul')
      .children('li')
      .first()
      .then(element => console.log(element));
  })
})