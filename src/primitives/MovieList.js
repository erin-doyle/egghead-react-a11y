import React from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';


const MovieList = ({ movieList, wishlist, movieActions }) => {
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

MovieList.defaultProps = {
    movieActions: () => null
};

MovieList.propTypes = {
    movieList: PropTypes.object.isRequired,
    wishlist: PropTypes.object.isRequired,
    movieActions: PropTypes.func
};


export default MovieList;