const { expect, context} = require("@playwright/test");

const tabPanel = 'tabpanel';
const list1 = 'One';
const list2 = 'Two';
const list6 = 'Six';
const list5 = 'Five';
const list4 = 'Four';
const tab = "tab";
const tabpaneGrid = '#demo-tabpane-grid';
const selectList1 = 'Cras justo odio';
const selectList2 = 'Dapibus ac facilisis in';
const selectList3 = 'Morbi leo risus';
const selectList4 = 'Porta ac consectetur ac';
const resizableBox = '#resizableBoxWithRestriction';
const draggable = '"#draggable';
const droppable = '#droppable';

exports.InteractionsPage = class InteractionsPage {
    constructor(page,context) {
        this.page = page;
        this.context = context;
    };
    async gotoSortablePage() {
        await this.page.goto("https://demoqa.com/sortable");
    };
    async handleSortableList() {
        await this.page.getByRole(tabPanel, { name: 'List' }).getByText(list6).dragTo(this.page.getByRole(tabPanel, {name: 'List'}).getByText(list1));
        await this.page.getByRole(tabPanel, { name: 'List' }).getByText(list1).dragTo(this.page.getByRole(tabPanel, {name: 'List'}).getByText(list5));
        await this.page.getByRole(tabPanel, { name: 'List' }).getByText(list6).dragTo(this.page.getByRole(tabPanel, {name: 'List'}).getByText(list2));
    };
    async handleSortableGrid() {
        await this.page.getByRole(tab, { name: 'Grid' }).click();
        await this.page.locator(tabpaneGrid).getByText(list6).dragTo(this.page.locator(tabpaneGrid).getByText(list1));
        await this.page.locator(tabpaneGrid).getByText(list2).dragTo(this.page.locator(tabpaneGrid).getByText(list5));
        await this.page.locator(tabpaneGrid).getByText(list6).dragTo(this.page.locator(tabpaneGrid).getByText(list4));
    };
    async gotoSelectablePage() {
        await this.page.goto("https://demoqa.com/selectable");
    };
    async handleSelectableList() {
        await this.page.getByText(selectList1).click();
        await this.page.getByText(selectList2).click();
        await this.page.getByText(selectList3).click();
        await this.page.getByText(selectList4).click();
    };
    async gotoResizablePage() {
        await this.page.goto("https://demoqa.com/resizable");
    };
    async handleResizablediv() {
        const src = await this.page.locator(resizableBox);
        if(src){
            const srcBound = await src.boundingBox();
            if(srcBound){
                await this.page.mouse.move(srcBound.x + srcBound.width /2 , srcBound.y + srcBound.height /2);
                await this.page.mouse.down();
                await this.page.mouse.move(srcBound.x + 800 , srcBound.y + srcBound.height + 500);
                await this.page.mouse.up();
            };
        };
    };
    async gotoDroppablePage() {
        await this.page.goto("https://demoqa.com/droppable");
    };
    async handleDroppableDiv() {
        const src = await this.page.$("#draggable");
        const dst = await this.page.$("#droppable");
        if(src && dst){
            const srcBound = await src.boundingBox();
            const dstBound = await dst.boundingBox();
            if(srcBound && dstBound){
                await this.page.mouse.move(srcBound.x + srcBound.width /2 , srcBound.y + srcBound.height / 2);
                await this.page.mouse.down();
                await this.page.mouse.move(dstBound.x + dstBound.width /2 , dstBound.y + dstBound.height / 2);
                await this.page.mouse.down();
            }else{
                throw new Error("No Element");
            };
        };
    };
};