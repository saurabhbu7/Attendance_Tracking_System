const assert = require('assert');
const fetch = require('node-fetch');

describe('Login Page', () => {
    it('should return 200 for valid credentials', async () => {
        const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'test@test.com', password: 'password' })
        });
        assert.strictEqual(res.status, 200);
    });

    it('should return 401 for invalid credentials', async () => {
        const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'test@test.com', password: 'wrongpassword' })
        });
        assert.strictEqual(res.status, 401);
    });
});
