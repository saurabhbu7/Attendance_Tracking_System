describe('AddStudent component', () => {
  beforeEach(() => {
    cy.visit('/add-student')
  })

  it('should add a new student', () => {
    cy.intercept('POST', '/api/students', { fixture: 'student.json' }).as('addStudent')
    cy.get('input[name="name"]').type('John Doe')
    cy.get('input[name="class"]').type('Math')
    cy.get('button[type="submit"]').click()
    cy.wait('@addStudent').then((xhr) => {
      expect(xhr.response.statusCode).to.equal(200)
      expect(xhr.response.body).to.deep.equal({
        StudentID: '01',
        StudentName: 'John Doe',
        ClassName: 'Math'
      })
    })
    cy.url().should('include', '/dashboard')
  })

  it('should cancel adding a student', () => {
    cy.get('div[data-testid="cancel"]').click()
    cy.url().should('include', '/dashboard')
  })
})
