import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const TabList = ({ ariaLabel, tabList }) => {
    const tabItems = tabList.map((tabItem, index) => (
        <li key={`${index}-${tabItem.linkTo}`} role="tab" className="nav-item">
            <NavLink to={tabItem.linkTo} className="nav-link" activeClassName="active">{tabItem.title}</NavLink>
        </li>
    ));

    return (
        <ul role="tablist" aria-label={ariaLabel} className="nav nav-tabs nav-justified">
            {tabItems}
        </ul>
    );
};

TabList.propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    tabList: PropTypes.array.isRequired
};


export default TabList;
