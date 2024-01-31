import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from './LoginPage';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

jest.mock('axios');

test('submits form and redirects to home page', async () => {
  axios.post.mockResolvedValue({});

  const { getByLabelText, getByText } = render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
  );

  fireEvent.change(getByLabelText(/email/i), { target: { value: 'test@test.com' } });
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'password' } });
  fireEvent.click(getByText(/login/i));

  await waitFor(() => expect(axios.post).toHaveBeenCalledWith('/api/login', {
    email: 'test@test.com',
    password: 'password',
  }));

  expect(window.location.pathname).toBe('/home');
});