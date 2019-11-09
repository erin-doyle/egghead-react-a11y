import React from 'react';
import PropTypes from 'prop-types';


const TabPanel = ({ name, children }) => (
    <div
        id={`${name}-panel`}
        role="tabpanel"
        aria-labelledby={`${name}-tab`}
        tabIndex="0"
    >
        {children}
    </div>
);

TabPanel.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};


export default TabPanel;
