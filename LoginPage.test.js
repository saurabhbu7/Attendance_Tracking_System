import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

test('renders login form', () => {
  const { getByLabelText } = render(<LoginPage />);
  const emailField = getByLabelText(/email/i);
  const passwordField = getByLabelText(/password/i);
  expect(emailField).toBeInTheDocument();
  expect(passwordField).toBeInTheDocument();
});

test('can submit form', () => {
  const { getByLabelText, getByText } = render(<LoginPage />);
  const emailField = getByLabelText(/email/i);
  const passwordField = getByLabelText(/password/i);
  const submitButton = getByText(/login/i);
  fireEvent.change(emailField, { target: { value: 'test@test.com' } });
  fireEvent.change(passwordField, { target: { value: 'password' } });
  fireEvent.click(submitButton);
  expect(submitButton).toBeDisabled();
});
