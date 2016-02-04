'use strict';

var _ConfigItem = require('./ConfigItem.jsx');

var _ConfigItem2 = _interopRequireDefault(_ConfigItem);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
    displayName: 'exports',

    render: function render() {
        return _react2.default.createElement(_ConfigItem2.default, { label: 'foo', value: 'bar' });
    }
});

// React.render(<ConfigItem label="foo" />, document.body);