import React from 'react';
import PropTypes from 'prop-types';

import MovieToolbarButton from './MovieToolbarButton';


const MovieToolbar = ({ movieTitle, buttonList }) => {
    const buttonItems = buttonList.map((buttonItem) => {
        const { title } = buttonItem;

        return (
            <MovieToolbarButton
                movieTitle={movieTitle}
                buttonText={title}
                clickHandler={buttonItem.action}
            />
        );
    });

    return (
        <div className="btn-group">
            {buttonItems}
        </div>
    );
};

MovieToolbar.propTypes = {
    movieTitle: PropTypes.string.isRequired,
    buttonList: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        action: PropTypes.func
    })).isRequired
};


export default MovieToolbar;
