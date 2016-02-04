import ConfigItem from './ConfigItem.jsx';
import React from 'react';

module.exports = React.createClass({
    render: function () {
        return (
          <ConfigItem label="foo" value="bar" />
        );
    }
});

// React.render(<ConfigItem label="foo" />, document.body);
