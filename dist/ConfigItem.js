"use strict";

var React = require('react');

module.exports = React.createClass({
    displayName: "exports",

    render: function render() {
        return React.createElement(
            "div",
            { className: "configItem" },
            React.createElement(
                "label",
                { className: "col-sm-4 control-label col-sm-4" },
                this.props.label
            ),
            React.createElement(
                "div",
                { className: "col-sm-6" },
                React.createElement("input", { type: "text", onChange: this.props.onChange, className: "form-control", value: this.props.value })
            )
        );
    }
});