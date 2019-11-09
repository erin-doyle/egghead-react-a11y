import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


class TabList extends Component {
    constructor(props) {
        super(props);

        const { tabList, match } = this.props;

        this.state = {
            // Default the selectedTab to the one matching the current URL (which matches the tabpanel content)
            selectedTab: tabList.find((tab) => tab.linkTo === match.url) || tabList[ 0 ]
        };

        this.selectedTabRef = null;

        this.setSelectedTabRef = this.setSelectedTabRef.bind(this);
        this.selectTab = this.selectTab.bind(this);
        this.gotoFirstTab = this.gotoFirstTab.bind(this);
        this.gotoLastTab = this.gotoLastTab.bind(this);
        this.gotoPreviousTab = this.gotoPreviousTab.bind(this);
        this.gotoNextTab = this.gotoNextTab.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
    }

    componentDidUpdate(prevProps) {
         const { match } = this.props;

        // Only when the selected tab has changed do we need to focus that tab
        // NOTE: this prevents extra focus jumping when other things change (i.e. Movie watched status)
        if (prevProps.match.url !== match.url) {
            if (this.selectedTabRef) {
                this.selectedTabRef.focus();
            }
        }
    }

    setSelectedTabRef(element) {
        this.selectedTabRef = element;
    }

    selectTab(tab) {
        const { history } = this.props;

        this.setState({ selectedTab: tab });

        // Navigate to the selected tab's URL in order to display it in the tabpanel
        history.push(tab.linkTo);
    }

    gotoFirstTab() {
        const { tabList } = this.props;
        this.selectTab(tabList[ 0 ]);
    }

    gotoLastTab() {
        const { tabList } = this.props;
        this.selectTab(tabList[ tabList.length - 1 ]);
    }

    gotoPreviousTab(currentTab) {
        const { tabList } = this.props;
        const index = tabList.findIndex((tab) => tab === currentTab);

        // If the current tab is already the first tab, circle round to the last tab
        if (index === 0) {
            this.gotoLastTab();
        } else {
            // Else go to the previous tab
            this.selectTab(tabList[ index - 1 ]);
        }
    }

    gotoNextTab(currentTab) {
        const { tabList } = this.props;
        const index = tabList.findIndex((tab) => tab === currentTab);

        // If the current tab is already the last tab, circle round to the first tab
        if (index === tabList.length - 1) {
            this.gotoFirstTab();
        } else {
            // Else go to the next tab
            this.selectTab(tabList[ index + 1 ]);
        }
    }

    handleClick(e, tab) {
        e.preventDefault();
        this.selectTab(tab)
    }

    /**
     * Per the WAI ARIA Tab List Design Pattern the following interaction is supported:
     *
     * When focus is on a tab element in a horizontal tab list:
     *      Left Arrow: moves focus to the previous tab. If focus is on the first tab, moves focus to the last tab.
     *      Right Arrow: Moves focus to the next tab. If focus is on the last tab element, moves focus to the first tab.
     *
     * When focus is on a tab in a tablist with either horizontal or vertical orientation:
     *      Space or Enter: Activates the tab if it was not activated automatically on focus.
     *      Home (Optional): Moves focus to the first tab.
     *      End (Optional): Moves focus to the last tab.
     *
     * WAI ARIA recommendation is that when a tab receives focus it "automatically activates" the newly focused tab.
     */
    handleKeydown(e, tab) {
        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                this.gotoPreviousTab(tab);
                break;

            case 'ArrowRight':
                e.preventDefault();
                this.gotoNextTab(tab);
                break;

            case 'Home':
                e.preventDefault();
                this.gotoFirstTab();
                break;

            case 'End':
                e.preventDefault();
                this.gotoLastTab();
                break;

            case 'Enter':
            case ' ':
            case 'Spacebar': // for older browsers
                e.preventDefault();
                this.selectTab(tab);
                break;

            default:
                break;
        }
    }

    render() {
        const { ariaLabel, tabList } = this.props;
        const { selectedTab } = this.state;

        const tabItems = tabList.map((tabItem) => {
            const { name, title } = tabItem;
            const isSelectedTab = tabItem.name === selectedTab.name;
            const tabClass = isSelectedTab ? 'nav-item nav-link active' : 'nav-item nav-link';

            return (
                <li
                    key={`${name}-tab`}
                    id={`${name}-tab`}
                    className={tabClass}

                    role="tab"
                    aria-selected={isSelectedTab}
                    aria-controls={isSelectedTab ? `${name}-panel` : null}
                    tabIndex={isSelectedTab ? 0 : -1}

                    onClick={e => this.handleClick(e, tabItem)}
                    onKeyDown={e => this.handleKeydown(e, tabItem)}

                    ref={ref => { if (isSelectedTab) this.setSelectedTabRef(ref); }}
                >
                    {title}
                </li>
            );
        });

        return (
            <ul role="tablist" aria-label={ariaLabel} className="nav nav-tabs nav-justified" tabIndex="0">
                {tabItems}
            </ul>
        );
    }
}

TabList.propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    tabList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        linkTo: PropTypes.string,
        title: PropTypes.string
    })).isRequired,
    // supplied by withRouter
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};


export default withRouter(TabList);
