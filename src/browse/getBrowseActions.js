import React from 'react';

import MovieToolbarButton from '../primitives/MovieToolbarButton';


const getMovieActions = (handleAdd, handleRemove) => (movieId, movieTitle, inWishlist) => {
    const buttonText = inWishlist ? 'Remove' : 'Add';
    const clickHandler = () => inWishlist ? handleRemove(movieId) : handleAdd(movieId);

    return (
        <div className="btn-group">
            <MovieToolbarButton movieTitle={movieTitle} buttonText={buttonText} clickHandler={clickHandler} />
        </div>
    );
};


export default getMovieActions;
