describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Successful login with valid credentials', () => {
    cy.login('validUsername', 'validPassword')
    cy.url().should('include', '/dashboard')
  })

  it('Unsuccessful login with invalid credentials', () => {
    cy.login('invalidUsername', 'invalidPassword')
    cy.get('.error').should('be.visible')
  })

  it('Login attempt with empty fields', () => {
    cy.login('', '')
    cy.get('.error').should('be.visible')
  })

  it('Login attempt with incorrect input formats', () => {
    cy.login('invalidEmail', 'shortPassword')
    cy.get('.error').should('be.visible')
  })

  it('Password strength validation', () => {
    cy.get('#password').type('weakPassword')
    cy.get('.password-strength').should('be.visible')
  })

  it('Forgot password functionality', () => {
    cy.get('#forgot-password').click()
    cy.url().should('include', '/reset-password')
  })
})