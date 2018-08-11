import React from 'react';


const getMovieActions = (showEditor, setAsWatched, setAsUnwatched, handleRemove) =>
    (movieId, watched) => {
        const watchButtonText = watched ? 'Unwatch' : 'Watched';
        const watchClickHandler = () => watched ? setAsUnwatched(movieId) : setAsWatched(movieId);
        const editClickHandler = () => showEditor(movieId);
        const removeClickHandler = () => handleRemove(movieId);

        return (
            <div className="btn-group">
                <button className="btn btn-secondary" onClick={watchClickHandler}>{watchButtonText}</button>
                <button className="btn btn-secondary" onClick={editClickHandler}>Edit</button>
                <button className="btn btn-secondary" onClick={removeClickHandler}>Remove</button>
            </div>
        );
    };

export default getMovieActions;
