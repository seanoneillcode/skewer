var React = require('react');

module.exports = React.createClass({
    render: function () {
        return (
          <div className="configItem">
            <label className="col-sm-4 control-label col-sm-4">{this.props.label}</label>
            <div className="col-sm-6">
                <input type="text" onChange={this.props.onChange} className="form-control" value={this.props.value}/>
            </div>
          </div>
        );
    }
});
