describe('AddStudent component', () => {
  beforeEach(() => {
    cy.visit('/add-student')
  })

  it('should add a new student when form is submitted', () => {
    cy.intercept('POST', '/students', { fixture: 'student.json' }).as('addStudent')
    cy.get('input[name="name"]').type('John Doe')
    cy.get('input[name="class"]').type('Math')
    cy.get('button[type="submit"]').click()
    cy.wait('@addStudent').then((interception) => {
      expect(interception.request.body).to.deep.equal({
        name: 'John Doe',
        class: 'Math'
      })
      expect(localStorage.getItem('students')).to.equal(JSON.stringify([{ StudentID: '01', StudentName: 'John Doe', ClassName: 'Math' }]))
      cy.url().should('include', '/dashboard')
    })
  })

  it('should navigate to dashboard when cancel button is clicked', () => {
    cy.get('div[data-testid="cancel-button"]').click()
    cy.url().should('include', '/dashboard')
  })
})