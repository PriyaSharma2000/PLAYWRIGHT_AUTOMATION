const{test,expect} = require("@playwright/test");

test('test google',async({page})=>{
    await page.goto("https://www.google.com/");
    await page.locator('input.gLFyf').fill("What is javascript ?");
    await page.keyboard.press('Enter');
    await page.keyboard.down('End');
    await page.locator("#botstuff > div > div:nth-child(2) > table > tbody > tr > td:nth-child(4) > a").click();
});


