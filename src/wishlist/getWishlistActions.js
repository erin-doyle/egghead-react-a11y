import React from 'react';


const getMovieActions = (handleUpdate, setAsWatched, setAsUnwatched, handleRemove) =>
    (movieId, watched) => {
        const notesHandler = () => handleUpdate({ notes: '' });
        const watchClickHandler = () => watched ? setAsUnwatched(movieId) : setAsWatched(movieId);
        const watchButtonText = watched ? 'Unwatch' : 'Watched';

        return (
            <div>
                <button onClick={notesHandler}>Notes</button>
                <button onClick={watchClickHandler}>{watchButtonText}</button>
                <button onClick={handleRemove}>Remove</button>
            </div>
        );
    };

export default getMovieActions;
