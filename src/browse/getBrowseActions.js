import React from 'react';


const getMovieActions = (handleAdd, handleRemove) => (movieId, inWishlist) => {
    const buttonText = inWishlist ? 'Remove' : 'Add';
    const clickHandler = () => inWishlist ? handleRemove(movieId) : handleAdd(movieId);

    return (
        <button onClick={clickHandler}>{buttonText}</button>
    );
};


export default getMovieActions;
