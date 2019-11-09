import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const TabList = ({ ariaLabel, activeTab, tabList }) => {
    const tabItems = tabList.map((tabItem) => {
        const { id, title, linkTo } = tabItem;
        const isActiveTab = id === activeTab;
        return (
            <li key={id} role="tab" className="nav-item" aria-selected={isActiveTab}>
                <NavLink to={linkTo} className="nav-link" activeClassName="active">{title}</NavLink>
            </li>
        );
    });

    return (
        <ul role="tablist" aria-label={ariaLabel} className="nav nav-tabs nav-justified">
            {tabItems}
        </ul>
    );
};

TabList.propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    activeTab: PropTypes.string.isRequired,
    tabList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        linkTo: PropTypes.string,
        title: PropTypes.string
    })).isRequired
};


export default TabList;
