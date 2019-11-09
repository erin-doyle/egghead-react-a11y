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
        this.gotoFirstButton = this.gotoFirstButton.bind(this);
        this.gotoLastButton = this.gotoLastButton.bind(this);
        this.gotoPreviousButton = this.gotoPreviousButton.bind(this);
        this.gotoNextButton = this.gotoNextButton.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
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

    gotoFirstButton () {
        const { buttonList } = this.props;
        this.selectButton(buttonList[0]);
    }

    gotoLastButton () {
        const { buttonList } = this.props;
        this.selectButton(buttonList[buttonList.length - 1]);
    }

    gotoPreviousButton (currentButton) {
        const { buttonList } = this.props;
        const index = buttonList.findIndex((button) => button === currentButton);

        // If the current button is already the first button, circle round to the last button
        if (index === 0) {
            this.gotoLastButton();
        } else {
            // Else go to the previous button
            this.selectButton(buttonList[index - 1]);
        }
    }

    gotoNextButton (currentButton) {
        const { buttonList } = this.props;
        const index = buttonList.findIndex((button) => button === currentButton);

        // If the current button is already the last button, circle round to the first button
        if (index === buttonList.length - 1) {
            this.gotoFirstButton();
        } else {
            // Else go to the next button
            this.selectButton(buttonList[index + 1]);
        }
    }

    handleClick (e, button) {
        e.preventDefault();
        this.selectButton(button);

        // Fire the button's action
        button.action();
    }

    /**
     * Per the WAI ARIA Button List Design Pattern the following interaction is supported:
     *
     * When focus is on a button element in a horizontal button list:
     *      Left Arrow: moves focus to the previous button. If focus is on the first button, moves focus to the last button.
     *      Right Arrow: Moves focus to the next button. If focus is on the last button element, moves focus to the first button.
     *
     * When focus is on a button in a buttonlist with either horizontal or vertical orientation:
     *      Space or Enter: Activates the button if it was not activated automatically on focus.
     *      Home (Optional): Moves focus to the first button.
     *      End (Optional): Moves focus to the last button.
     *
     * WAI ARIA recommendation is that when a button receives focus it "automatically activates" the newly focused button.
     */
    handleKeydown (e, button) {
        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                this.gotoPreviousButton(button);
                break;

            case 'ArrowRight':
                e.preventDefault();
                this.gotoNextButton(button);
                break;

            case 'Home':
                e.preventDefault();
                this.gotoFirstButton();
                break;

            case 'End':
                e.preventDefault();
                this.gotoLastButton();
                break;

            case 'Enter':
            case ' ':
            case 'Spacebar': // for older browsers
                e.preventDefault();
                this.selectButton(button);

                // Fire the button's action
                button.action();
                break;

            default:
                break;
        }
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
                    keyDownHandler={e => this.handleKeydown(e, buttonItem)}

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
