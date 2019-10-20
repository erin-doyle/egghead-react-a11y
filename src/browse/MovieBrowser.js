import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import movies from '../movies';
import Header from '../primitives/Header';

import BrowseList from './BrowseList';
import getBrowseActions from './getBrowseActions';


const MovieBrowser = ({
    history,
    match,
    wishlist,
    addToWishlist,
    removeFromWishlist
}) => {
    const goToWishlist = () => history.push('/wishlist');
    const movieActions = getBrowseActions(addToWishlist, removeFromWishlist);
    const moviesInGenre = movies[match.params.genre];

    return (
        <div>
            <Header title="Browse Movies" buttonText="< Back" handleButtonClick={goToWishlist} />

            <main>
                <ul className="nav nav-pills nav-justified">
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
                    <BrowseList
                        movieList={moviesInGenre}
                        wishlist={wishlist}
                        movieActions={movieActions}
                    />
                </div>
            </main>
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
