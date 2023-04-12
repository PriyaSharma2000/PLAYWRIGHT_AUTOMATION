const playwright = require('@playwright/test');
const { before, after, beforeEach, afterEach } = require('mocha');

beforeEach(async () => {
    global.browser = await playwright['chromium'].launch({headless: false});
    global.context = await browser.newContext();
    global.page = await context.newPage();
    global.element = new ElementsPage(page);
  });

  afterEach(async () =>{
    await global.browser.close();
  });