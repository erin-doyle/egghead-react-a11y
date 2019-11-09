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
    const selectedGenre = match.params.genre;
    const goToWishlist = () => history.push('/wishlist');

    // NOTE: id value should match :genre path in linkTo URL
    // since we're using match.params.genre to identify the activeTab
    const tabList = [
        { id: "action", linkTo: "/browse/action", title: "Action" },
        { id: "drama", linkTo: "/browse/drama", title: "Drama" },
        { id: "comedy", linkTo: "/browse/comedy", title: "Comedy" },
        { id: "scifi", linkTo: "/browse/scifi", title: "Sci Fi" },
        { id: "fantasy", linkTo: "/browse/fantasy", title: "Fantasy" }
    ];
    const movieActions = getBrowseActions(addToWishlist, removeFromWishlist);
    const moviesInGenre = movies[selectedGenre];

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
                <TabList ariaLabel="Movie Genres" activeTab={selectedGenre} tabList={tabList} />

                <div id={`${selectedGenre}-panel`} role="tabpanel">
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
