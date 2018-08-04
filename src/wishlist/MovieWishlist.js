import React from 'react';
import PropTypes from 'prop-types';


const MovieWishlist = ({
    history,
    wishlist,
    updateMovie,
    setAsWatched,
    setAsUnwatched,
    removeMovie
}) => {
    const goToBrowse = () => history.push('/browse');

    return (
        <div>
            <div><h1>Movie Wishlist</h1></div><div><button onClick={goToBrowse}>Add</button></div>
        </div>
    );
};

MovieWishlist.propTypes = {
    history: PropTypes.object.isRequired,
    wishlist: PropTypes.object.isRequired,
    updateMovie: PropTypes.func.isRequired,
    setAsWatched: PropTypes.func.isRequired,
    setAsUnwatched: PropTypes.func.isRequired,
    removeMovie: PropTypes.func.isRequired
};


export default MovieWishlist;