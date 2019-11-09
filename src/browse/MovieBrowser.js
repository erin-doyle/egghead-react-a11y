import React from 'react';
import PropTypes from 'prop-types';

import movies from '../movies';
import Header from '../primitives/Header';
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
            <Header
                title="Browse Movies"
                buttonText="< Back"
                buttonLabel="Back to Wish List"
                handleButtonClick={goToWishlist}
                doFocus
            />

            <main>
                <TabList ariaLabel="Movie Genres" tabList={tabList} />

                <div role="tabpanel">
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
