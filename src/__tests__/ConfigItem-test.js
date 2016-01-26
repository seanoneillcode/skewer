jest.dontMock('../ConfigItem.jsx');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');
var ConfigItem = require('../ConfigItem.jsx');

describe('config item', function() {
  it('displays the correct text', function() {
    var configItem = ReactTestUtils.renderIntoDocument(
      <ConfigItem />
    );
    var configItemNode = ReactDOM.findDOMNode(configItem);
    expect(configItemNode.textContent).toEqual('hello');
  });
});
