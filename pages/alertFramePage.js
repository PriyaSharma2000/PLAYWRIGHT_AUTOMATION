const {context, expect} = require('@playwright/test');

const newTabBtn = '#tabButton';
const newWindowBtn = '#windowButton';
const newWindowMessage = '#messageWindowButton';
const alertButton = '#alertButton';
const timerAlertButton = '#timerAlertButton';
const confirmButton = '#confirmButton';
const confirmResult = '#confirmResult';
const promtButton = '#promtButton';
const promptResult = '#promptResult';
const frameText = 'h1';
const smallModal = '#showSmallModal';
const closeSmallModal = '#closeSmallModal';
const largeModal = '#showLargeModal';
const closeLargeModal = '#closeLargeModal';

exports.AlertFramePage = class AlertFramePage {
    constructor(page, context) {
        this.page = page;
        this.context = context;
    };
    async gotoBrowserWindows() {
        await this.page.goto("https://demoqa.com/browser-windows");
    };
    async clickNewTab() {
        this.page.waitForEvent("popup");
        await this.page.click(newTabBtn);
    };
    async clickNewWindow() {
        const [newWindow] = await Promise.all([
        this.page.waitForEvent("popup"),
        this.page.click(newWindowBtn)
        ]);
        console.log(newWindow.url());
    };
    async clickNewWindowMsg() {
        this.page.waitForEvent("popup");
        await this.page.click(newWindowMessage);
    };
    async gotoAlertsPage() {
        await this.page.goto("https://demoqa.com/alerts");
    };
    async clickAlertBtn() {
        this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toContain('alert');
            expect(dialog.message()).toContain('You clicked a button');
            await dialog.accept()
          });
          await this.page.click(alertButton);
    };
    async clickTimeAlert() {
        this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toContain('alert');
            expect(dialog.message()).toContain('This alert appeared after 5 seconds');
            await dialog.accept()
          });
          await this.page.click(timerAlertButton);
          await this.page.waitForEvent("dialog");
    };
    async clickConfirmOk() {
        this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toContain('confirm');
            expect(dialog.message()).toContain('Do you confirm action?');
            await dialog.accept()
          });
          await this.page.click(confirmButton);
          await expect(this.page.locator(confirmResult)).toHaveText("You selected Ok");
    };
    async clickConfirmCancel() {
        this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toContain('confirm');
            expect(dialog.message()).toContain('Do you confirm action?');
            await dialog.dismiss();
          });
          await this.page.click(confirmButton);
          await expect(this.page.locator(confirmResult)).toHaveText("You selected Cancel");
    };
    async clickPrompt() {
        this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toContain('prompt');
            expect(dialog.message()).toContain('Please enter your name');
            await dialog.accept("Hello");
          });
          await this.page.click(promtButton);
          await expect(this.page.locator(promptResult)).toHaveText("You entered Hello");
    };
    async gotoFrames() {
        await this.page.goto("https://demoqa.com/frames");
    };
    async verifyFrame() {
        const frame1 = await this.page.frame({url:/\/sample/});
        const heading1 = await frame1.$(frameText);
        console.log(await heading1.innerText());
    };
    async gotoNestedFrames() {
        await this.page.goto("https://demoqa.com/nestedframes");
    };
    async verifyNestedFrames() {
        const parentFrame = await this.page.frame({url:/\/sampleiframe/});
        const childFrame = await parentFrame.frameLocator("body > iframe").locator('body');
        const text = await childFrame.textContent();
        console.log(text);
    };
    async gotoModalPage() {
        await this.page.goto("https://demoqa.com/modal-dialogs");
    };
    async clickSmallModal() {
        await this.page.click(smallModal);
    };
    async clickCloseSmallModal() {
        await this.page.click(closeSmallModal);
    };
    async clickLargeModal() {
        await this.page.click(largeModal);
    };
    async clickCloseLargeModal() {
        await this.page.click(closeLargeModal)
    };
};