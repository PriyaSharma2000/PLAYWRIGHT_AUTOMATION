const playwright = require("@playwright/test");
const {InteractionsPage} = require("../pages/interactionsPage");
const { expect, assert, should } = require('chai');

let page, browser, context;

beforeEach(async () => {
  browser = await playwright['chromium'].launch({headless: false});
  context = await browser.newContext();
  page = await context.newPage();
  interaction = new InteractionsPage(page);
});

afterEach(async () =>{
  await browser.close();
});

describe("sortable tests",()=>{
    it("sortable lists", async()=>{
        await interaction.gotoSortablePage();
        await interaction.handleSortableList();
    });
    it("sortable grid", async()=>{
        await interaction.gotoSortablePage();
        await interaction.handleSortableGrid();
    });
});

describe("selectable tests", ()=>{
    it('select multiple values', async () => {
        await interaction.gotoSelectablePage();
        await interaction.handleSelectableList();
      });
});

describe("resizeable tests", ()=>{
    it("div should be resizable", async()=>{
        await interaction.gotoResizablePage();
        await interaction.handleResizablediv();
    });
});


describe("droppable tests", ()=>{
    it("should be able to drag the div inside the another div", async()=>{
        await interaction.gotoDroppablePage();
        await interaction.handleDroppableDiv();
    });
});
