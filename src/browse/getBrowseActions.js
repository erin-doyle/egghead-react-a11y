import React from 'react';


const getMovieActions = (handleAdd, handleRemove) => (movieId, inWishlist) => {
    const buttonText = inWishlist ? 'Remove' : 'Add';
    const clickHandler = () => inWishlist ? handleRemove(movieId) : handleAdd(movieId);

    return (
        <div className="btn-group">
            <button className="btn btn-secondary" onClick={clickHandler}>{buttonText}</button>
        </div>
    );
};


export default getMovieActions;
