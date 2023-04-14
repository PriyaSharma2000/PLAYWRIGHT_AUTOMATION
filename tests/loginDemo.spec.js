const {test,expect} = require('@playwright/test');

test('Login Test 1', async({page})=>{
    await page.goto("https://demo.applitools.com/");
    await page.pause();
    await page.getByPlaceholder("Enter your username").fill("Allen");
    await page.getByPlaceholder("Enter your password").fill("12345");
    await page.locator("text=Sign in").click();
})

test('Login test 2', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.pause();
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('span').filter({ hasText: 'Paul Collings' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
})