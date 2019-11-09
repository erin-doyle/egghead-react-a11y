import React from 'react';

import MovieToolbar from '../primitives/MovieToolbar';


const getMovieActions = (showEditor, setAsWatched, setAsUnwatched, handleRemove) =>
    (movieId, movieTitle, watched) => {
        const watchButtonText = watched ? 'Unwatch' : 'Watched';
        const watchClickHandler = () => watched ? setAsUnwatched(movieId) : setAsWatched(movieId);
        const editClickHandler = () => showEditor(movieId);
        const removeClickHandler = () => handleRemove(movieId);

        const movieButtonList = [
            { title: watchButtonText, action: watchClickHandler },
            { title: 'Edit', action: editClickHandler },
            { title: 'Remove', action: removeClickHandler }
        ];

        return (
            <MovieToolbar movieTitle={movieTitle} buttonList={movieButtonList}/>
        );
    };

export default getMovieActions;
