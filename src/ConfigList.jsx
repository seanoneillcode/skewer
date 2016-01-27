var React = require('react');
var ConfigItem = require('./ConfigItem.jsx');

module.exports = React.createClass({
    render: function() {
      var createItem = function(item) {
        return <ConfigItem key={item.id} label=item.label value=item.value/>;
      };
      return <ul>{this.props.items.map(createItem)}</ul>;
    }
});
