
'use strict';

function getHTML() {
    return "<div>Hello lol</div>";
}

var Skewer = function Skewer(element, schema) {
    this.element = element;
    this.schema = schema;
    // parse schema into object
    // translate to data object
    // build form component using data object
};

Skewer.prototype = {
    constructor: Skewer,
    getHTML : getHTML
}

module.exports = Skewer;
