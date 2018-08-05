import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import WishList from './WishList';
import getWishlistActions from './getWishlistActions';


const MovieWishlist = ({
    history,
    match,
    wishlist,
    updateMovie,
    setAsWatched,
    setAsUnwatched,
    removeMovie
}) => {
    const goToBrowse = () => history.push('/browse');
    const movieActions = getWishlistActions(updateMovie, setAsWatched, setAsUnwatched, removeMovie);

    return (
        <div>
            <div><h1>Movie Wishlist</h1></div><div><button onClick={goToBrowse}>Add</button></div>

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink to="/wishlist/unwatched" className="nav-link" activeClassName="active">Unwatched</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/wishlist/watched" className="nav-link" activeClassName="active">Watched</NavLink>
                </li>
            </ul>

            <div>
                <WishList
                    movieList={wishlist}
                    watched={match.params.status === 'watched'}
                    movieActions={movieActions}
                />
            </div>
        </div>
    );
};

MovieWishlist.propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    wishlist: PropTypes.object.isRequired,
    updateMovie: PropTypes.func.isRequired,
    setAsWatched: PropTypes.func.isRequired,
    setAsUnwatched: PropTypes.func.isRequired,
    removeMovie: PropTypes.func.isRequired
};


export default MovieWishlist;