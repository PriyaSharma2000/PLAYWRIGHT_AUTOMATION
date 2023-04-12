const ElementsPage = require('./elementsPage');
const FormsPage = require('./formsPage');
const AlertFramePage = require('./alertFramePage');
const WidgetsPage = require('./widgetsPage');
const InteractionsPage = require('./interactionsPage');

const element = new ElementsPage();
const forms = new FormsPage();
const alertFrames = new AlertFramePage();
const widgets = new WidgetsPage();
const interaction = new InteractionsPage();

export{
    element,
    forms,
    alertFrames,
    widgets,
    interaction
};