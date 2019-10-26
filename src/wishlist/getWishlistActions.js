import React from 'react';

import MovieToolbarButton from '../primitives/MovieToolbarButton';


const getMovieActions = (showEditor, setAsWatched, setAsUnwatched, handleRemove) =>
    (movieId, movieTitle, watched) => {
        const watchButtonText = watched ? 'Unwatch' : 'Watched';
        const watchClickHandler = () => watched ? setAsUnwatched(movieId) : setAsWatched(movieId);
        const editClickHandler = () => showEditor(movieId);
        const removeClickHandler = () => handleRemove(movieId);

        return (
            <div className="btn-group">
                <MovieToolbarButton movieTitle={movieTitle} buttonText={watchButtonText} clickHandler={watchClickHandler} />
                <MovieToolbarButton movieTitle={movieTitle} buttonText="Edit" clickHandler={editClickHandler} />
                <MovieToolbarButton movieTitle={movieTitle} buttonText="Remove" clickHandler={removeClickHandler} />
            </div>
        );
    };

export default getMovieActions;
