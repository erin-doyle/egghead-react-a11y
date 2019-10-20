import React from 'react';
import PropTypes from 'prop-types';


const Header = ({ title, buttonText, handleButtonClick }) => (
    <header>
        <nav className="navbar navbar-dark bg-primary">
            <span className="navbar-text">
                {title}
            </span>
            <button className="btn btn-outline-secondary" onClick={handleButtonClick}>{buttonText}</button>
        </nav>
    </header>
);

Header.defaultProps = {
    buttonText: ''
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    handleButtonClick: PropTypes.func.isRequired
};


export default Header;
