'use strict';

jest.dontMock('../ConfigItem.jsx');
jest.dontMock('../App.jsx');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');
var App = require('../App.jsx');

describe('config item', function () {
    it('displays the correct text', function () {
        var app = ReactTestUtils.renderIntoDocument(React.createElement(App, { label: 'greeting' }));
        var appNode = ReactDOM.findDOMNode(app);
        //console.log("configItemNode children", configItemNode.children);
        expect(appNode.textContent).toEqual('greeting');
    });
});