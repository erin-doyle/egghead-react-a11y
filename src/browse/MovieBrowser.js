import React from 'react';
import PropTypes from 'prop-types';

import movies from '../movies';
import TabList from '../primitives/TabList';

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
    const tabList = [
        { linkTo: "/browse/action", title: "Action" },
        { linkTo: "/browse/drama", title: "Drama" },
        { linkTo: "/browse/comedy", title: "Comedy" },
        { linkTo: "/browse/scifi", title: "Sci Fi" },
        { linkTo: "/browse/fantasy", title: "Fantasy" }
    ];
    const movieActions = getBrowseActions(addToWishlist, removeFromWishlist);
    const moviesInGenre = movies[match.params.genre];

    return (
        <div>
            <header className="navbar navbar-dark">
                <span className="navbar-brand">
                    <h1>Browse Movies</h1>
                </span>
                <nav>
                    <button className="btn btn-outline-light" aria-label="Back to Wish List" onClick={goToWishlist}>{'< Back'}</button>
                </nav>
            </header>

            <main>
                <TabList tabList={tabList} />

                <div>
                    <BrowseList
                        movieList={moviesInGenre}
                        wishlist={wishlist}
                        movieActions={movieActions}
                    />
                </div>
            </main>

            <footer className="footer">
                <div><a href="/T&C">Terms &amp; Conditions</a></div>
                <div><a href="/privacy">Privacy Policy</a></div>
                <div>© Movie Wishlist 2019</div>
            </footer>
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
