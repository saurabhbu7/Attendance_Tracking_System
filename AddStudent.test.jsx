import { mount } from '@cypress/react';
import AddStudent from './AddStudent';

describe('AddStudent', () => {
  it('renders the form correctly', () => {
    mount(<AddStudent />);
    cy.get('form').should('exist');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="class"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('submits the form with student data', () => {
    const setModal = cy.stub();
    mount(<AddStudent setModal={setModal} />);
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="class"]').type('10th Grade');
    cy.get('button[type="submit"]').click();
    cy.wrap(window.localStorage).its('getItem').should('be.calledWith', 'students');
    cy.wrap(setModal).should('be.calledWith', false);
  });

  it('cancels the form submission', () => {
    const setModal = cy.stub();
    mount(<AddStudent setModal={setModal} />);
    cy.get('div[onClick]').click();
    cy.wrap(setModal).should('be.calledWith', false);
  });
});