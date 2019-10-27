import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const TabList = ({ tabList }) => {
    const tabItems = tabList.map((tabItem, index) => (
        <li key={`${index}-${tabItem.linkTo}`} className="nav-item">
            <NavLink to={tabItem.linkTo} className="nav-link" activeClassName="active">{tabItem.title}</NavLink>
        </li>
    ));

    return (
        <ul className="nav nav-tabs nav-justified">
            {tabItems}
        </ul>
    );
};

TabList.propTypes = {
    tabList: PropTypes.array.isRequired
};


export default TabList;
