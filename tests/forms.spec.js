const playwright = require("@playwright/test");
const {FormsPage} = require("../pages/formsPage");
const { expect, assert, should } = require('chai');

let page, browser, context;

beforeEach(async () => {
  browser = await playwright['chromium'].launch({headless: false});
  context = await browser.newContext();
  page = await context.newPage();
  forms = new FormsPage(page);
});

afterEach(async () =>{
  await browser.close();
});

describe("Forms tests", ()=>{
    it('should be able to fill correct data in the form', async () => {
      await forms.gotoFormsPage();
      await forms.clickFirstName("Tester");
      await forms.clickLastName("Test");
      await forms.clickEmail("tester@test.com");
      await forms.clickGender();
      await forms.clickNumber("1234567894");
      await forms.clickDateOfBirth();
      await forms.clickSubjects("English");
      await forms.clickHobbies();
      await forms.clickUpload();
      await forms.clickCurrentAddress("#35,GR road");
      await forms.clickState();
      await forms.clickCity();
      await forms.clicksubmit();
      await forms.clickClose();
      });
      it("should show error when submitting the incorrect data", async()=>{
      await forms.gotoFormsPage();
      await forms.clickFirstName("Tester");
      await forms.clickLastName("Test");
      await forms.clickEmail("tester.");
      await forms.clickGender();
      await forms.clickNumber("1234");
      await forms.clickDateOfBirth();
      await forms.clickSubjects("English");
      await forms.clickHobbies();
      await forms.clickUpload();
      await forms.clickCurrentAddress("#35,GR road");
      await forms.clickState();
      await forms.clickCity();
      await forms.clicksubmit();
      });
});
