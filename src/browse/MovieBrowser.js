import React from 'react';
import PropTypes from 'prop-types';

import movies from './movies';


const MovieBrowser = ({
    history,
    wishlist,
    addToWishlist,
    removeFromWishlist
}) => {
    const goToWishlist = () => history.push('/wishlist');

    return (
        <div>
            <div><h1>Add Movie</h1></div><div><button onClick={goToWishlist}>Cancel</button></div>
        </div>
    );
};

MovieBrowser.propTypes = {
    history: PropTypes.object.isRequired,
    wishlist: PropTypes.object.isRequired,
    addToWishlist: PropTypes.func.isRequired,
    removeFromWishlist: PropTypes.func.isRequired
};


export default MovieBrowser;