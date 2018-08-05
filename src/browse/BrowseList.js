import React from 'react';
import PropTypes from 'prop-types';

import Movie from '../primitives/Movie';


const BrowseList = ({ movieList, wishlist, movieActions }) => {
    return Object.entries(movieList).map(([ movieId, movie ]) => {
        const inWishlist = !!wishlist[movieId];

        return (
            <div key={movieId}>
                <Movie movieId={movieId} movie={movie}/>
                {movieActions(movieId, inWishlist)}
            </div>
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