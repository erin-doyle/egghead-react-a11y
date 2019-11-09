import React from 'react';
import PropTypes from 'prop-types';

import movies from '../movies';
import Header from '../primitives/Header';
import TabList from '../primitives/TabList';
import TabPanel from '../primitives/TabPanel';

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

    // NOTE: name value should match :genre path in linkTo URL
    // since we're using match.params.genre to identify the activeTab
    const tabList = [
        { name: "action", linkTo: "/browse/action", title: "Action" },
        { name: "drama", linkTo: "/browse/drama", title: "Drama" },
        { name: "comedy", linkTo: "/browse/comedy", title: "Comedy" },
        { name: "scifi", linkTo: "/browse/scifi", title: "Sci Fi" },
        { name: "fantasy", linkTo: "/browse/fantasy", title: "Fantasy" }
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
                <TabList ariaLabel="Movie Genres" tabList={tabList} />

                <TabPanel name={selectedGenre}>
                    <BrowseList
                        movieList={moviesInGenre}
                        wishlist={wishlist}
                        movieActions={movieActions}
                    />
                </TabPanel>
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
