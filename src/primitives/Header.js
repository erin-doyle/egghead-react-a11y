import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';


const Header = ({ title, buttonText, buttonLabel, handleButtonClick, doFocus }) => {
    const headerRef = useRef(null);

    useEffect(() => {
        if (doFocus && headerRef && headerRef.current) {
            headerRef.current.focus();
        }
    }, [doFocus]);

    return (
        <header>
            <nav className="navbar navbar-dark">
                <span className="navbar-brand">
                    {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
                    <h1 ref={headerRef} tabIndex={0}>{title}</h1>
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
};

Header.defaultProps = {
    buttonText: '',
    buttonLabel: null,
    doFocus: false
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    buttonLabel: PropTypes.string,
    handleButtonClick: PropTypes.func.isRequired,
    doFocus: PropTypes.bool
};


export default Header;
