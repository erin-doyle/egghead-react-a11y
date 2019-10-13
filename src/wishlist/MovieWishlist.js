import React from 'react';
import PropTypes from 'prop-types';


const MovieWishlist = ({ history }) => {
    const goToBrowse = () => history.push('/browse');

    return (
        <div>
            <div><h1>Movie Wishlist</h1></div><div><button onClick={goToBrowse}>Add</button></div>
        </div>
    );
};

MovieWishlist.propTypes = {
    history: PropTypes.object.isRequired
};


export default MovieWishlist;