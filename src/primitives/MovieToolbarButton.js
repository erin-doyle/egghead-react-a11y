import React from 'react';
import PropTypes from 'prop-types';


const MovieToolbarButton = ({ movieTitle, buttonText, clickHandler }) => {
    return (
        <button className="btn btn-secondary" onClick={clickHandler}>{buttonText}</button>
    );
};

MovieToolbarButton.defaultProps = {
    buttonText: ''
};

MovieToolbarButton.propTypes = {
    movieTitle: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    clickHandler: PropTypes.func.isRequired
};


export default MovieToolbarButton;
