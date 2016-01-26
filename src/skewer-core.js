
'use strict';

function getHTML() {
    return "<div>Hello lol</div>";
}

var Skewer = function Skewer(element, schema) {
    this.element = element;
    this.schema = schema;
};

Skewer.prototype = {
    constructor: Skewer
    getHTML : getHTML;
}

module.exports = Skewer;
