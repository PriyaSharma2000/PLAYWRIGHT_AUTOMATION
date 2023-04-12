exports.Page = class Page {
    constructor(page,context) {
        this.page = page;
        this.context = context;
    };
    async gotoPage (url) {
        await this.page.goto(url);
    };
    async click (locator) {
        await this.page.locator(locator).click();
    };
    async type (locator,text) {
        await this.page.locator(locator).fill(text);
    };
    async doubleClick (locator) {
        await this.page.locator(locator).dblclick();
    };
    async rightClick(locator) {
        await this.page.click(locator, { button: 'right'});
    };
};