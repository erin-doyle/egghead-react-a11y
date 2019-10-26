import React from 'react';
import PropTypes from 'prop-types';


const MovieToolbarButton = ({ movieTitle, buttonText, buttonLabel, clickHandler }) => {
    const ariaLabel = buttonLabel || `${buttonText} ${movieTitle}`;

    return (
        <button className="btn btn-secondary" aria-label={ariaLabel} onClick={clickHandler}>{buttonText}</button>
    );
};

MovieToolbarButton.defaultProps = {
    buttonText: '',
    buttonLabel: null
};

MovieToolbarButton.propTypes = {
    movieTitle: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    buttonLabel: PropTypes.string,
    clickHandler: PropTypes.func.isRequired
};


export default MovieToolbarButton;
