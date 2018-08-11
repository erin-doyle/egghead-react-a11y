import React from 'react';
import PropTypes from 'prop-types';

import Movie from '../primitives/Movie';


const BrowseList = ({ movieList, wishlist, movieActions }) => {
    return Object.entries(movieList).map(([ movieId, movie ]) => {
        const inWishlist = !!wishlist[movieId];

        return (
            <Movie key={movieId} movieId={movieId} movie={movie} movieActions={movieActions(movieId, inWishlist)}/>
        );
    });
};

BrowseList.defaultProps = {
    movieActions: () => null
};

BrowseList.propTypes = {
    movieList: PropTypes.object.isRequired,
    wishlist: PropTypes.object.isRequired,
    movieActions: PropTypes.func
};


export default BrowseList;