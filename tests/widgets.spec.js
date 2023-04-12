const playwright = require("@playwright/test");
const {WidgetsPage} = require("../pages/widgetsPage");
const { expect, assert, should } = require('chai');

let page, browser, context;

beforeEach(async () => {
  browser = await playwright['chromium'].launch({headless: false});
  context = await browser.newContext();
  page = await context.newPage();
  widgets = new WidgetsPage(page);
});

afterEach(async () =>{
  await browser.close();
});

// describe("Accordian tests", () => {
//   it("every div should collapsed when one div is opened", async () => {
//     await widgets.gotoAccordionPage();
//     await widgets.clickSections();
//   });
// });

// describe("auto complete tests",()=>{
//     it("auto drop the list according to search", async()=>{
//         await widgets.gotoAutoComplete();
//         await widgets.clickAutoCompleteMultipleContainer();
//         await widgets.clickAutoCompleteSingleContainer();
//     });
// });

// describe("date picker tests", ()=>{
//     it('pick date and time', async () => {
//         await widgets.gotoDatePickerPage();
//         await widgets.selectDate();
//         await widgets.selectDateAndTime();
//       });
// });

// describe("slider tests", ()=>{
//     it("handle slider", async()=>{
//         await widgets.gotoSliderPage();
//         await widgets.handleSlider();
//     });
// });

describe("progress bar tests", ()=>{
    it("progress bar functioning", async()=>{
         await widgets.gotoProgressBar();
          widgets.handleProgressBar();
    });
});

// describe("tool tips tests", ()=>{
//     it("hover over elements to see hover messages", async()=>{
//         await widgets.gotoToolTipPage();
//         await widgets.handleToolTip();
//     });
// });


// describe("menu tests", ()=>{
//     it("click on menu bars and sub menu bar", async()=>{
//         await widgets.gotoMenuPage();
//         await widgets.handleMenu();
//     });
// });

// describe("select menu tests", ()=>{
//     it("click on select menu", async()=>{
//         await widgets.gotoSelectMenu();
//         await widgets.handleSelectMenu();
//     });
// });




// test.describe("tabs tests", ()=>{
//     test("click on What tab", async()=>{
//          page.goto(`${baseUrl}/tabs`);
//          page.click("#demo-tab-what");
//          expect(page.locator("#demo-tabpane-what")).toHaveText("Lorem Ipsum is simply dummy text");
//     });
// });
