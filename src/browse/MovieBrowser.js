import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import MovieList from '../primitives/MovieList';

import movies from './movies';


const getMovieActions = (handleAdd, handleRemove) => (movieId, inWishlist) => {
    const clickHandler = () => inWishlist ? handleRemove(movieId) : handleAdd(movieId);
    const buttonText = inWishlist ? 'Remove' : 'Add';

    return (
        <button onClick={clickHandler}>{buttonText}</button>
    );
};

const MovieBrowser = ({
    history,
    match,
    wishlist,
    addToWishlist,
    removeFromWishlist
}) => {
    const goToWishlist = () => history.push('/wishlist');
    const movieActions = getMovieActions(addToWishlist, removeFromWishlist);

    const moviesInGenre = movies[match.params.genre];

    return (
        <div>
            <div><h1>Add Movie</h1></div><div><button onClick={goToWishlist}>Cancel</button></div>

            <div><h2>Genres</h2></div>

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink to="/browse/action" className="nav-link" activeClassName="active">Action</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/browse/drama" className="nav-link" activeClassName="active">Drama</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/browse/comedy" className="nav-link" activeClassName="active">Comedy</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/browse/scifi" className="nav-link" activeClassName="active">Sci Fi</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/browse/fantasy" className="nav-link" activeClassName="active">Fantasy</NavLink>
                </li>
            </ul>

            <div>
                <MovieList
                    movieList={moviesInGenre}
                    wishlist={wishlist}
                    movieActions={movieActions}
                />
            </div>
        </div>
    );
};

MovieBrowser.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    wishlist: PropTypes.object.isRequired,
    addToWishlist: PropTypes.func.isRequired,
    removeFromWishlist: PropTypes.func.isRequired
};


export default MovieBrowser;