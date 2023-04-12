const playwright = require("@playwright/test");
const {AlertFramePage} = require("../pages/alertFramePage");
const { expect, assert, should } = require('chai');

let page, browser, context;

beforeEach(async () => {
  browser = await playwright['chromium'].launch({headless: false});
  context = await browser.newContext();
  page = await context.newPage();
  alertFrame = new AlertFramePage(page);
});

afterEach(async () =>{
  await browser.close();
});

describe("Browser Windows Tests", () => {
  it("should be able to open new tab", async () => {
    await alertFrame.gotoBrowserWindows();
    await alertFrame.clickNewTab();
  });
  it("should be able to open new window", async () => {
    await alertFrame.gotoBrowserWindows();
    await alertFrame.clickNewWindow();
  });
  it("should be able to open new window with message", async () => {
    await alertFrame.gotoBrowserWindows();
    await alertFrame.clickNewWindowMsg();
  });
});

describe("alert tests", ()=>{
    it("on button click alert should get triggered", async()=>{
      await alertFrame.gotoAlertsPage();
      await alertFrame.clickAlertBtn();
    });
    it("on button click alert should get triggered after 5 seconds", async()=>{
      await alertFrame.gotoAlertsPage();
      await alertFrame.clickTimeAlert();
    });
    it("verify confirmation with Ok button", async()=>{
      await alertFrame.gotoAlertsPage();
      await alertFrame.clickConfirmOk();
    });
    it("verify confirmation with cancel button", async()=>{
      await alertFrame.gotoAlertsPage();
      await alertFrame.clickConfirmCancel();
    });
    it("verify prompt dialog", async()=>{
      await alertFrame.gotoAlertsPage();
      await alertFrame.clickPrompt();
    });
});

describe("frames tests",()=>{
    it("interaction frame1", async()=>{
        await alertFrame.gotoFrames();
        await alertFrame.verifyFrame();
    });
});

describe("nested frames tests", ()=>{
    it("test first frame", async()=>{
      await alertFrame.gotoNestedFrames();
      await alertFrame.verifyNestedFrames();
    });
});

describe("modals page test", () => {
  it("should be able to click on small modal", async()=>{
     await alertFrame.gotoModalPage();
     await alertFrame.clickSmallModal();
     await alertFrame.clickCloseSmallModal();
  });
  it("should be able to click on large modal", async()=>{
     await alertFrame.gotoModalPage();
     await alertFrame.clickLargeModal();
     await alertFrame.clickCloseLargeModal();
  });
});