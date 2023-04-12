const playwright = require("@playwright/test");
const {ElementsPage} = require("../pages/elementsPage");
const chai = require('chai');
global.expect = chai.expect;
global.expect = playwright.expect;

let page, browser, context;

// beforeEach(async () => {
//   browser = await playwright['chromium'].launch({headless: false});
//   context = await browser.newContext();
//   page = await context.newPage();
//   element = new ElementsPage(page);
// });

// afterEach(async () =>{
//   await browser.close();
// });

describe("Text box tests", () => {
  it("should be able to submit correct data", async () => {
    // await element.gotoTextBoxPage();
    await page.goto();
    await element.typeUserName();
    await element.typeUserEmail();
    await element.typeCurrentAddress();
    await element.typePermanentAddress();
    await element.clickSubmit();
  });
});

// describe("checkbox tests", () => {
  // it("should be able to expand and collapse all dropdown list", async () => {
  //   await element.gotoCheckBoxPage();
  //   await element.clickExpandAll();   
  //   await element.clickCollapseAll();
  // });
//   it("should be able to check the checkboxes", async () => {
//     await element.gotoCheckBoxPage();
//     await element.clickHomeBox();
//     await element.clickDesktopBox();
//     await element.clickDocumentBox();
//     await element.clickOfficeBox();
//     await element.clickClassifiedBox();
//   });
// });

// describe("Radio button tests", () => {
//   it("should be able to click on radio buttons", async () => {
//     const msgText = "You have selected Impressive";
//     const msg = page.locator('p[class="mt-3"]')
//     await element.gotoRadioButton();
//     await element.clickImpressive();
//     await expect(msg).toHaveText(msgText);
//   });
// });

// describe("Web tables tests", () => {
//   it("should be able to add correct data", async () => {
//     await element.gotoWebTables();
//     await element.clickAdd();
//     await element.enterFirstName();
//     await element.enterLastName();
//     await element.enterAge();
//     await element.enterEmail('tester@test.com');
//     await element.enterSalary();
//     await element.enterDepartment();
//     await element.clickSubmit();
//   });
//   it("should show error when submitting incorrect data", async () => {
//     await element.gotoWebTables();
//     await element.clickAdd();
//     await element.enterFirstName();
//     await element.enterLastName();
//     await element.enterAge();
//     await element.enterEmail('123456@');
//     await element.enterSalary();
//     await element.enterDepartment();
//     await element.clickSubmit();
//   });
//   it("should be able to edit the data", async () => {
//     await element.gotoWebTables();
//     await element.editblock();
//     await element.enterEmail('tester@test.com');
//     await element.clickSubmit();
//   });
//   it("should able to delete data", async () => {
//     await element.gotoWebTables();
//     await element.deleteBlock();
//   });
//   it("should be able to search the fields", async () => {
//     await element.gotoWebTables();
//     await element.search('Cierra');
//     await element.search('2000');
//   });
// });

// describe("Buttons Tests", () => {
//   it("should be able to click on buttons", async () => {
//     await element.gotoButtonsPage();
//     await element.doubleClickButton();
//     await expect(page.locator("#doubleClickMessage")).toHaveText('You have done a double click');
//     await element.rightClickButton();
//     await expect(page.locator('[id="rightClickMessage"]')).toHaveText('You have done a right click');
//   });
// });

// describe("Links tests", ()=>{
//   it('should be able to click on Home page', async () => {
//     await element.gotoLinksPage();
//     await element.clickHome();
//   });
// });

// describe("broken lists test", ()=>{
//   it('should be able to click on broken link', async()=>{
//     await element.gotoBrokenLinksImg();
//     await element.clickBrokenLinks();
//   });
// });

// describe("upload download tests", ()=>{
//   it('should be able to download', async () => {
//     await element.gotoUploadDownload();
//     await element.clickDownload();
//   });
//  it('should be able to upload a file', async () => {
//     await element.gotoUploadDownload();
//     await element.clickUpload();
//   });
// });