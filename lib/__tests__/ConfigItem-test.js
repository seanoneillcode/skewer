jest.dontMock('../ConfigItem.jsx');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');
var ConfigItem = require('../ConfigItem.jsx');

describe('config item', function () {
    it('displays the correct text', function () {
        var configItem = ReactTestUtils.renderIntoDocument(
            <ConfigItem label="greeting" value="hello"/>
        );
        var configItemNode = ReactDOM.findDOMNode(configItem);
        //console.log("configItemNode children", configItemNode.children);
        expect(configItemNode.textContent).toEqual('greeting');

        var input = ReactTestUtils.findRenderedDOMComponentWithTag(configItem, 'input');
        //console.log("input ", input.value);
        expect(input.value).toEqual('hello');
    });
});
