import { test, expect } from '@playwright/test';

test('get user list', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/todos/1');

    // Assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const body = await response.json();
    const abc = body.data;
    console.log(abc);
    //expect(body.data).toBeDefined();
});
