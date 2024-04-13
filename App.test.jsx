describe('Attendance Tracking System', () => {
  it('Visits the Login Page', () => {
    cy.visit('/')
    cy.contains('Login')
  })

  it('Visits the Dashboard Page', () => {
    cy.visit('/dashboard')
    cy.contains('Dashboard')
  })

  it('Visits the Settings Page', () => {
    cy.visit('/dashboard/settings')
    cy.contains('Settings')
  })
})

describe('Login Page', () => {
  it('Successfully loads', () => {
    cy.visit('/')
  })

  it('Contains Login Form', () => {
    cy.visit('/')
    cy.get('form')
  })
})

describe('Dashboard Page', () => {
  it('Successfully loads', () => {
    cy.visit('/dashboard')
  })

  it('Contains Dashboard Content', () => {
    cy.visit('/dashboard')
    cy.get('.dashboard-content')
  })
})

describe('Settings Page', () => {
  it('Successfully loads', () => {
    cy.visit('/dashboard/settings')
  })

  it('Contains Settings Content', () => {
    cy.visit('/dashboard/settings')
    cy.get('.settings-content')
  })
})