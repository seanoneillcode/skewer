var React = require('react');
var ConfigItem = require('./ConfigItem.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {items: this.props.items};
    },
    onChange: function(item, e) {
        var thing = this.state.items.filter(function(each) {
            return each.label === item.label;
        });
        thing.value = item.value;
        this.setState({items: e.target.value});
    },
    render: function() {
      var createItem = function(item) {
        return <ConfigItem onChange=this.onChange.bind(this, item) key={item.id} label=item.label value=item.value/>;
      };
      return <ul>{this.props.items.map(createItem)}</ul>;
    }
});
