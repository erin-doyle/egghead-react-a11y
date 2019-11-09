import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieToolbarButton from './MovieToolbarButton';


class MovieToolbar extends Component {
    constructor(props) {
        super(props);

        const { buttonList } = this.props;

        this.state = {
            selectedButton: buttonList[0]
        };

        this.selectedButtonRef = null;

        this.setSelectedButtonRef = this.setSelectedButtonRef.bind(this);
        this.selectButton = this.selectButton.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const { selectedButton } = this.state;

        // Only when the selected button has changed do we need to focus that button
        if (prevState.selectedButton !== selectedButton) {
            if (this.selectedButtonRef) {
                this.selectedButtonRef.focus();
            }
        }
    }

    setSelectedButtonRef(element) {
        this.selectedButtonRef = element;
    }

    selectButton (button) {
        this.setState({selectedButton: button});
    }

    handleClick (e, button) {
        e.preventDefault();
        this.selectButton(button);

        // Fire the button's action
        button.action();
    }

    render() {
        const { ariaLabel, movieTitle, buttonList } = this.props;
        const { selectedButton } = this.state;

        const buttonItems = buttonList.map((buttonItem) => {
            const { title } = buttonItem;
            const isSelectedButton = buttonItem.title === selectedButton.title;

            return (
                <MovieToolbarButton
                    key={`${title}-button`}
                    id={`${title}-button`}
                    movieTitle={movieTitle}
                    buttonText={title}

                    tabIndex={isSelectedButton ? 0 : -1}

                    clickHandler={e => this.handleClick(e, buttonItem)}

                    innerRef={ref => { if (isSelectedButton) this.setSelectedButtonRef(ref); }}
                />
            );
        });

        return (
            <div className="btn-group" role="toolbar" aria-label={ariaLabel}>
                {buttonItems}
            </div>
        );
    }
}

MovieToolbar.propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    movieTitle: PropTypes.string.isRequired,
    buttonList: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        action: PropTypes.func
    })).isRequired
};


export default MovieToolbar;
