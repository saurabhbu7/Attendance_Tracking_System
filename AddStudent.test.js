describe('AddStudent', () => {
    beforeEach(() => {
        cy.visit('/addstudent');
    });

    it('should display the Add Student form', () => {
        cy.get('form').should('exist');
        cy.contains('Add Student').should('exist');
        cy.get('input[name="name"]').should('exist');
        cy.get('input[name="class"]').should('exist');
        cy.contains('Save').should('exist');
        cy.contains('Cancel').should('exist');
    });

    it('should allow user to enter student name and class', () => {
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="class"]').type('Class 1');
    });

    it('should store the student data in local storage on form submission', () => {
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="class"]').type('Class 1');
        cy.get('button[type="submit"]').click();
        cy.window().then((win) => {
            expect(win.localStorage.getItem('students')).to.exist;
            const students = JSON.parse(win.localStorage.getItem('students'));
            expect(students).to.have.length(1);
            expect(students[0]).to.deep.equal({ StudentID: '01', StudentName: 'John Doe', ClassName: 'Class 1' });
        });
    });

    it('should navigate to the dashboard on form submission', () => {
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="class"]').type('Class 1');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
    });

    it('should close the form when the Cancel button is clicked', () => {
        cy.get('div[onClick]').click();
        cy.get('form').should('not.exist');
    });
});

Please note that you need to replace '/addstudent' and '/dashboard' with the actual routes in your application.
