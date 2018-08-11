import React from 'react';
import PropTypes from 'prop-types';

import Movie from '../primitives/Movie';


const WishList = ({ movieList, watched, movieActions }) => {
    const isWatched = ([ movieId, movie ]) => movie.watched === watched;

    return Object.entries(movieList)
        .filter(isWatched)
        .map(([ movieId, movie ]) =>
                <Movie key={movieId} movieId={movieId} movie={movie} movieActions={movieActions(movieId, movie.watched)}/>
        );
};

WishList.defaultProps = {
    watched: false,
    movieActions: () => null
};

WishList.propTypes = {
    movieList: PropTypes.object.isRequired,
    watched: PropTypes.bool,
    movieActions: PropTypes.func
};


export default WishList;