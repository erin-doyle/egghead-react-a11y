import React from 'react';
import PropTypes from 'prop-types';


const Header = ({ title, buttonText, buttonLabel, handleButtonClick }) => (
    <header>
        <nav className="navbar navbar-dark">
            <span className="navbar-brand">
                <h1>{title}</h1>
            </span>
            <button
                className="btn btn btn-outline-light"
                onClick={handleButtonClick}
                aria-label={buttonLabel}
            >
                {buttonText}
            </button>
        </nav>
    </header>
);

Header.defaultProps = {
    buttonText: '',
    buttonLabel: null
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    buttonLabel: PropTypes.string,
    handleButtonClick: PropTypes.func.isRequired
};


export default Header;
