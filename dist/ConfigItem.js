"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
    displayName: "exports",

    render: function render() {
        return _react2.default.createElement(
            "div",
            { className: "configItem" },
            _react2.default.createElement(
                "label",
                { className: "col-sm-4 control-label col-sm-4" },
                this.props.label
            ),
            _react2.default.createElement(
                "div",
                { className: "col-sm-6" },
                _react2.default.createElement("input", { type: "text", onChange: this.props.onChange, className: "form-control", value: this.props.value })
            )
        );
    }
});