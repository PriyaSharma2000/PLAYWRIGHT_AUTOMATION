const { expect, context} = require("@playwright/test");
const page = require('./page');

exports.ElementsPage = class ElementsPage extends page.Page{
    constructor() {
        super();
    };
    elements = {
        textBoxPage: {
            textBoxUrl: "https://demoqa.com/text-box",
            userName: '#userName',
            userEmail: '#userEmail',
            currentAddress: '#currentAddress',
            permanentAddress: '#permanentAddress',
            submitButton: '#submit'
        },
        checkBoxPage: {
            expandAll: '.rct-option-expand-all',
            collapseAll: '.rct-option-collapse-all',
            homeBox: '#tree-node > ol > li > span > button > svg',
            desktopBox: '//*[@id="tree-node"]/ol/li/ol/li[1]/span/label/span[1]',
            documentBox: '//*[@id="tree-node"]/ol/li/ol/li[1]/span/label/span[1]',
            officeBox: '#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(2) > span > button > svg',
            classifiedBox: '//*[@id="tree-node"]/ol/li/ol/li[2]/ol/li[2]/ol/li[3]/span/label/span[1]'
        },
        radioButtonPage: {
            impressiveButton: 'Impressive'
        },
        webTablesPage: {
            firstName: '#firstName',
            lastName: '#lastName',
            age: '#age',
            userEmail: '#userEmail',
            salary: '#salary',
            department: '#department',
            addBtn: '#addNewRecordButton',
            searchBox: '#searchBox',
            deleteBtn: '#delete-record-2',
            editBtn: '#edit-record-2'
        },
        buttonsPage: {
            doubleClickBtn: '[id="doubleClickBtn"]',
            rightClickBtn: '[id="rightClickBtn"]'
        },
        linksPage: {
            homeLink: '[id="simpleLink"]'
        },
        brokenLinksPage: {
            brokenLink: '[href="http://the-internet.herokuapp.com/status_codes/500"]'
        },
        uploadDownloadPage: {
            downloadBtn: '#downloadButton',
            uploadBtn: '#uploadFile'
        },
    }
    async gotoTextBoxPage() {
        await this.gotoPage(this.elements.textBoxPage.textBoxUrl);
    };
    async typeUserName() {
        await this.type(this.elements.textBoxPage.userName, 'Test Tester');
    };
    async typeUserEmail() {
        await this.type(this.elements.textBoxPage.userEmail, 'tester@test.com');
    };
    async typeCurrentAddress() {
        await this.type(this.elements.textBoxPage.currentAddress, '3930 N Pine Grove Ave, Chicago, IL 60613');
    };
    async typePermanentAddress() {
        await this.type(this.elements.textBoxPage.permanentAddress, '24 Girard St, Rochester, NY 14610');
    };
    async clickSubmit() {
        await this.click(this.elements.textBoxPage.submitButton);
    };
    async gotoCheckBoxPage() {
        await this.page.goto("https://demoqa.com/checkbox");
    };
    async clickExpandAll() {
        await this.click(this.elements.checkBoxPage.expandAll);
    };
    async clickCollapseAll() {
        await this.click(this.elements.checkBoxPage.collapseAll);
    };
    async clickHomeBox() {
        await this.click(this.elements.checkBoxPage.homeBox);
    };
    async clickDesktopBox() {
        await this.click(this.elements.checkBoxPage.desktopBox);
    };
    async clickDocumentBox() {
        await this.click(this.elements.checkBoxPage.documentBox);
    };
    async clickOfficeBox() {
        await this.click(this.elements.checkBoxPage.officeBox);
    };
    async clickClassifiedBox() {
        await this.click(this.elements.checkBoxPage.classifiedBox);
    };
    async gotoRadioButton() {
        await this.page.goto("https://demoqa.com/radio-button");
    };
    async clickImpressive() {
        await this.page.getByText(impressiveButton).click();
    };
    async gotoWebTables() {
        await this.page.goto("https://demoqa.com/webtables");
    };
    async clickAdd() {
        await this.page.click(addBtn);
    };
    async enterFirstName() {
        await this.page.fill(firstName, 'Tester');
    };
    async enterLastName() {
        await this.page.fill(lastName, 'Test');
    };
    async enterEmail(email) {
        await this.page.fill(userEmail, email);
    };
    async enterAge() {
        await this.page.fill(age, '22');
    };
    async enterSalary() {
        await this.page.fill(salary, '25000');
    };
    async enterDepartment() {
        await this.page.fill(department, 'QA');
    };
    async search(searchText) {
        await this.page.fill(searchBox, searchText);
    };
    async editblock() {
        await this.page.click(editBtn);
    };
    async deleteBlock() {
        await this.page.click(deleteBtn);
    };
    async gotoButtonsPage() {
        await this.page.goto("https://demoqa.com/buttons");
    };
    async doubleClickButton() {
        await this.page.dblclick(doubleClickBtn);
    };
    async rightClickButton() {
        await this.page.click(rightClickBtn, { button: 'right'});
    };
    async gotoLinksPage() {
        await this.page.goto("https://demoqa.com/links");
    };
    async clickHome() {
        const [newPage] = await Promise.all([
            this.page.waitForEvent("popup"),
            this.page.locator(simpleLink).click()
        ]);
        return newPage;
    };
    async gotoBrokenLinksImg() {
        await this.page.goto("https://demoqa.com/broken");
    };
    async clickBrokenLinks() {
        await this.page.click(brokenLinks);
    };
    async gotoUploadDownload() {
        await this.page.goto("https://demoqa.com/upload-download");
    };
    async clickDownload() {
        const [download] = await Promise.all([
            this.page.waitForEvent("download"),
            this.page.click(downloadBtn)
        ]);
        const fileName = download.suggestedFilename();
        await download.saveAs(fileName);
    };
    async clickUpload() {
        const [uploadFiles] = await Promise.all([
            this.page.waitForEvent("filechooser"),
            this.page.click(uploadBtn)
        ]);
        await uploadFiles.setFiles(["uploadItems/bg1.jpeg"]);
    };
};













// const userName = '#userName';
// const userEmail = '#userEmail';
// const currentAddress = '#currentAddress';
// const permanentAddress = '#permanentAddress';
// const submitButton = '#submit';
// const plusIcon = '.rct-option-expand-all';
// const minusIcon = '.rct-option-collapse-all'
// const homeBox = '#tree-node > ol > li > span > button > svg';
// const desktopBox = '//*[@id="tree-node"]/ol/li/ol/li[1]/span/label/span[1]';
// const documentBox = '#tree-node > ol > li > ol > li:nth-child(2) > span > button > svg';
// const officeBox = '#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(2) > span > button > svg';
// const classifiedBox = '//*[@id="tree-node"]/ol/li/ol/li[2]/ol/li[2]/ol/li[3]/span/label/span[1]';
// const impressiveButton = 'Impressive';
// const addBtn = '#addNewRecordButton';
// const firstName = '#firstName';
// const lastName = '#lastName';
// const age = '#age';
// const salary = '#salary';
// const department = '#department';
// const searchBox = '#searchBox';
// const deleteBtn = '#delete-record-2';
// const editBtn = '#edit-record-2';
// const doubleClickBtn = '[id="doubleClickBtn"]';
// const rightClickBtn = '[id="rightClickBtn"]';
// const simpleLink = '[id="simpleLink"]';
// const brokenLinks = '[href="http://the-internet.herokuapp.com/status_codes/500"]';
// const downloadBtn = '#downloadButton';
// const uploadBtn = '#uploadFile';