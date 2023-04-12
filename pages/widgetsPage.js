const {context, expect} = require('@playwright/test');

const section1Heading = '#section1Heading';
const section2Heading = '#section2Heading';
const autoCompleteMultipleContainer = '#autoCompleteMultipleInput';
const purple = 'Purple';
const black = 'Black';
const blue = 'Blue';
const autoCompleteSingleContainer = '#autoCompleteSingleInput';
const datePickerMonthYearInput = '#datePickerMonthYearInput';
const monthSelect = 'select[class="react-datepicker__month-select"]';
const yearSelect = 'select[class="react-datepicker__year-select"]';
const dateSelect = 'option';
const dateAndTimePickerInput = '#dateAndTimePickerInput';
const pickMonth = 'div[class="react-datepicker__month-read-view"]';
const month = 'February';
const pickYear = 'div[class="react-datepicker__year-read-view"]';
const year = '2022';
const pickDate = 'option';
const pickTime = '15:00';
const slider = 'slider';
const sliderValue = '#sliderValue';
const startStopButton = '#startStopButton';
const toolTipButton = '#toolTipButton';
const toolTipTextField = '#toolTipTextField';
const ContraryWord = 'Contrary';
const linkHover = '1.10.32';
const item2 = 'Main Item 2';
const link1 = 'link';
const link2 = 'link';
const selectOpt = '#withOptGroup';
const selectTitle = '#selectOne';
const selectMenu = '#oldSelectMenu';
const multiSelectDropdown = '#selectMenuContainer > div:nth-child(7) > div > div';
const opt1 = '#react-select-4-option-2';
const opt2 = '#react-select-4-option-0';
const opt3 = '#react-select-4-option-3';
const opt4 = '#react-select-4-option-1';
const cars = '#cars';

exports.WidgetsPage = class WidgetsPage {
    constructor(page, context) {
        this.page = page;
        this.context = context;
    };
    async gotoAccordionPage() {
        await this.page.goto("https://demoqa.com/accordian");
    };
    async clickSections() {
        await this.page.click(section2Heading);
        await this.page.click(section1Heading);
    };
    async gotoAutoComplete() {
        await this.page.goto("https://demoqa.com/auto-complete");
    };
    async clickAutoCompleteMultipleContainer() {
        await this.page.locator(autoCompleteMultipleContainer).fill('l');
        await this.page.getByText(purple, { exact: true }).click();
        await this.page.locator(autoCompleteMultipleContainer).fill('b');
        await this.page.getByText(black, { exact: true });
    };
    async clickAutoCompleteSingleContainer() {
        await this.page.locator(autoCompleteSingleContainer).fill('b');
        await this.page.getByText(blue, { exact: true });
    };
    async gotoDatePickerPage() {
        await this.page.goto("https://demoqa.com/date-picker");
    };
    async selectDate() {
        await this.page.click(datePickerMonthYearInput);
        await this.page.locator(monthSelect).selectOption('1');
        await this.page.locator(yearSelect).selectOption('2022');
        await this.page.getByRole(dateSelect, { name: 'Choose Monday, February 21st, 2022' }).click();
    };
    async selectDateAndTime() {
        await this.page.click(dateAndTimePickerInput);
        await this.page.locator(pickMonth).click();
        await this.page.getByText(month).click();
        await this.page.locator(pickYear).click();
        await this.page.getByText(year).click();
        await this.page.getByRole(pickDate, { name: 'Choose Monday, February 21st, 2022' }).click();
        await this.page.getByText(pickTime).click();
    };
    async gotoSliderPage() {
        await this.page.goto("https://demoqa.com/slider");
    };
    async handleSlider() {
        const s = await this.page.getByRole(slider);
        let ele = this.page.locator(sliderValue);
        let targetValue = 50;
        let isCompleted = false;
        if(s){
            while(!isCompleted){
                let srcBound = await s.boundingBox();
                if(srcBound){
                    await this.page.mouse.move(srcBound.x + srcBound.width / 2 , srcBound.y + srcBound.height / 2);
                    await this.page.mouse.down();
                    await this.page.mouse.move(srcBound.x + 217 , srcBound.y + srcBound.height /2);
                    await this.page.mouse.up();
                    let text = await ele.inputValue();
                    if(text == targetValue){
                        isCompleted = true;
                    };
                };
            };
        };
    };
    async gotoProgressBar() {
        await this.page.goto("https://demoqa.com/progress-bar");
    };
    async handleProgressBar() {
        await this.page.click(startStopButton);
        await expect(this.page.locator(startStopButton)).toHaveText('Stop');
        await this.page.waitForSelector('div[class="progress-bar bg-info"][aria-valuenow="75"]');
        await this.page.click(startStopButton);
    };
    async gotoToolTipPage() {
        await this.page.goto("https://demoqa.com/tool-tips");
    };
    async handleToolTip() {
        await this.page.locator(toolTipButton).hover();
        await this.page.locator(toolTipTextField).hover();
        await this.page.getByText(ContraryWord).hover();
        await this.page.getByText(linkHover).hover();
    };
    async gotoMenuPage() {
        await this.page.goto("https://demoqa.com/menu");
    };
    async handleMenu() {
        await this.page.getByText(item2).click();
        await this.page.getByRole(link1, { name: 'SUB SUB LIST »' }).click();
        await this.page.getByRole(link2, { name: 'Sub Sub Item 2' }).click();
    };
    async gotoSelectMenu() {
        await this.page.goto("https://demoqa.com/select-menu");
    };
    async handleSelectMenu() {
        await this.page.locator(selectOpt).first().click();
        await this.page.getByText('Group 1, option 2', { exact: true }).click();
        await this.page.locator(selectTitle).first().click();
        await this.page.getByText('Mr.', { exact: true }).click();
        await this.page.locator(selectMenu).selectOption('4');
        await this.page.locator(multiSelectDropdown).click();
        await this.page.locator(opt1).click();
        await this.page.locator(opt2).click();
        await this.page.locator(opt3).click();
        await this.page.locator(opt4).click();
        await this.page.locator(cars).selectOption('saab');
    };
};