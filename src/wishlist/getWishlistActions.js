import React from 'react';


const getMovieActions = (showEditor, setAsWatched, setAsUnwatched, handleRemove) =>
    (movieId, watched) => {
        const watchButtonText = watched ? 'Unwatch' : 'Watched';
        const watchClickHandler = () => watched ? setAsUnwatched(movieId) : setAsWatched(movieId);
        const editClickHandler = () => showEditor(movieId);
        const removeClickHandler = () => handleRemove(movieId);

        return (
            <div>
                <button onClick={watchClickHandler}>{watchButtonText}</button>
                <button onClick={editClickHandler}>Edit</button>
                <button onClick={removeClickHandler}>Remove</button>
            </div>
        );
    };

export default getMovieActions;
