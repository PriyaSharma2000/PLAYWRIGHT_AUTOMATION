const {test,expect} = require('@playwright/test');

const baseUrl = "https://demoqa.com";

test.describe("login page test",()=>{
    test("should be able to login", async({page})=>{
        await page.goto(`${baseUrl}/login`);
        await page.getByPlaceholder('UserName').fill('Allen');
        await page.getByPlaceholder('Password').fill('1234');
        await page.getByRole('button', {name: 'Login'}).click();
    });
    test("should through an error when the fields are empty", async({page})=>{
        await page.goto(`${baseUrl}/login`);
        await page.getByRole('button', {name: 'Login'}).click();
    });
    test("should be able to register as a new user", async({page})=>{
        await page.goto(`${baseUrl}/login`);
        await page.getByRole("button", {name: 'New User'}).click();
        await page.getByPlaceholder('First Name').fill("Kate");
        await page.getByPlaceholder("Last Name").fill("Brown");
        await page.getByPlaceholder("UserName").fill("Kate.Brown123");
        await page.getByPlaceholder("Password").fill("Kate12@brown.3");
        await page.getByRole("button", {name: 'Register'}).click();
    })
});

test.describe("book store tests", ()=>{
    test("should be able search a book", async({page})=>{
        await page.goto(`${baseUrl}/books`);
        await page.getByPlaceholder('Type to search').fill('kyle');
        await page.getByRole('link', { name: 'You Don\'t Know JS' }).click();
    });
    test("should be able to click on the link", async({page})=>{
        await page.goto(`${baseUrl}/books`);
        await page.getByRole('link', { name: 'Git Pocket Guide' }).click();
        await page.getByRole('button', { name: 'Back To Book Store' }).click();
    });
});

test.describe("book store api tests", ()=>{
    test.only("account authorization post method", async({page,request})=>{
        const pageUrl = page.goto(`${baseUrl}/swagger/#/Account/AccountV1AuthorizedPost`);
        const _response = await request.post(pageUrl, {
            headers: {
                "Authorization": "Basic QWxsZW4gMTIzNDU1MjM0"
            },
            data: {
                "userName": "Allen",
                "password": "123455234"
            }
        })
        expect(_response.status()).toBe(201);
        expect(_response.ok).toBeTruthy();
        console.log(await _response.json());
    })
})