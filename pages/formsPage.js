const { expect, context} = require("@playwright/test");

const firstName = '#firstName';
const lastName = '#lastName';
const userEmail = '#userEmail';
const gender = "Female";
const userNumber = '#userNumber';
const dateOfBirthInput = '#dateOfBirthInput';
const subjectsInput = '#subjectsInput';
const hobbies = 'Sports';
const uploadPicture = '#uploadPicture';
const currentAddress = '#currentAddress';
const state ="#state";
const getState = 'Uttar Pradesh';
const city = '#city';
const getCity = 'Lucknow';
const submit = '#submit';
const closeBtn = '#closeLargeModal';

exports.FormsPage = class FormsPage {
    constructor(page, context) {
        this.page = page;
        this.context = context;
    };
    async gotoFormsPage() {
        await this.page.goto("https://demoqa.com/automation-practice-form");
    };
    async clickFirstName(fName) {
        await this.page.fill(firstName, fName);
    };
    async clickLastName(lName) {
        await this.page.fill(lastName, lName);
    };
    async clickEmail(mail) {
        await this.page.fill(userEmail, mail);
    };
    async clickGender() {
        await this.page.getByText(gender).click();
    };
    async clickNumber(num) {
        await this.page.fill(userNumber, num);
    };
    async clickDateOfBirth() {
        await this.page.click(dateOfBirthInput);
        await this.page.getByRole('option', { name: 'Choose Monday, March 6th, 2023' }).click();
    };
    async clickSubjects(subjects) {
        await this.page.fill(subjectsInput, subjects);
    };
    async clickHobbies() {
        await this.page.getByText(hobbies).click();
    };
    async clickUpload() {
        const [uploadFiles] = await Promise.all([
            this.page.waitForEvent("filechooser"),
            this.page.click(uploadPicture)
        ]);
        await uploadFiles.setFiles(["uploadItems/bg1.jpeg"]);
    };
    async clickCurrentAddress(address) {
        await this.page.fill(currentAddress, address);
    };
    async clickState() {
        await this.page.click(state);
        await this.page.getByText(getState, { exact: true}).click();
    };
    async clickCity() {
        await this.page.click(city);
        await this.page.getByText(getCity, { exact: true}).click();
    };
    async clicksubmit() {
        await this.page.click(submit);
    };
    async clickClose() {
        await this.page.click(closeBtn);
    };
};