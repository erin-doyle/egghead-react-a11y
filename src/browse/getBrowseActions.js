import React from 'react';


const getMovieActions = (handleAdd, handleRemove) => (movieId, inWishlist) => {
    const clickHandler = () => inWishlist ? handleRemove(movieId) : handleAdd(movieId);
    const buttonText = inWishlist ? 'Remove' : 'Add';

    return (
        <button onClick={clickHandler}>{buttonText}</button>
    );
};

export default getMovieActions;
