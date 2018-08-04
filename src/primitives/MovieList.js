import React from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';


const MovieList = ({ movieList }) => (
    Object.entries(movieList).map(([ movieId, movie ]) => (
        <Movie key={movieId} movieId={movieId} movie={movie}/>
    ))
);

MovieList.propTypes = {
    movieList: PropTypes.object.isRequired
};


export default MovieList;