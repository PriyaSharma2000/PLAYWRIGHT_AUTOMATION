const {test,expect} = require('@playwright/test');

test('Selectors', async({page})=>{
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder("Username").fill("Edison");
    await page.locator("id=user-name").fill("Allen");
    await expect.toHaveId("login-button");
})