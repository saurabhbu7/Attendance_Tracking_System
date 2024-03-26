describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('displays login form', () => {
    cy.get('form').should('be.visible');
  });

  it('redirects to dashboard on successful login', () => {
    cy.get('input[type="text"]').type('student');
    cy.get('input[type="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });

  it('shows an error on unsuccessful login', () => {
    cy.get('input[type="text"]').type('wrong');
    cy.get('input[type="password"]').type('credentials');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Invalid credentials');
    });
  });
});