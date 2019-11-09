import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from '../primitives/Header';
import TabList from '../primitives/TabList';
import TabPanel from '../primitives/TabPanel';

import WishList from './WishList';
import getWishlistActions from './getWishlistActions';
import MovieEditor from './MovieEditor';


class MovieWishlist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showEditor: false,
            movieIdInEdit: null
        };

        this.addSomeMoviesLink = React.createRef();

        this.handleShowEditor = this.handleShowEditor.bind(this);
        this.handleHideEditor = this.handleHideEditor.bind(this);
        this.handleUpdateMovie = this.handleUpdateMovie.bind(this);
    }

    componentDidMount() {
        if (this.addSomeMoviesLink && this.addSomeMoviesLink.current) {
            this.addSomeMoviesLink.current.focus();
        }
    }

    handleShowEditor(movieId) {
        this.setState({
            showEditor: true,
            movieIdInEdit: movieId
        });
    }

    handleHideEditor() {
        this.setState({
            showEditor: false,
            movieIdInEdit: null
        });
    }

    handleUpdateMovie(updatedDetails) {
        const { updateMovie } = this.props;
        const { movieIdInEdit } = this.state;

        updateMovie(movieIdInEdit, updatedDetails);
        this.handleHideEditor();
    }

    render() {
        const {
            history,
            match,
            wishlist,
            setAsWatched,
            setAsUnwatched,
            removeMovie
        } = this.props;
        const { showEditor, movieIdInEdit } = this.state;

        const selectedStatus = match.params.status;
        const hasMovies = !!Object.keys(wishlist).length;
        const goToBrowse = () => history.push('/browse');

        // NOTE: name value should match :status path in linkTo URL
        // since we're using match.params.status to identify the activeTab
        const tabList = [
            { name: 'unwatched', linkTo: "/wishlist/unwatched", title: "Unwatched" },
            { name: 'watched', linkTo: "/wishlist/watched", title: "Watched" }
        ];
        const movieActions = getWishlistActions(this.handleShowEditor, setAsWatched, setAsUnwatched, removeMovie);
        const movieInEditing = movieIdInEdit ? wishlist[movieIdInEdit] : {};

        return (
            <div>
                <Header
                    title="Movie Wishlist"
                    buttonText="+" buttonLabel="Add a Movie"
                    handleButtonClick={goToBrowse}
                    doFocus={hasMovies} // only focus the header if we have movies, otherwise focus the Add some movies! link
                />

                <main>
                    { hasMovies
                        ? ( // Show WishList
                            <Fragment>
                                <TabList ariaLabel="WishLists by Status" tabList={tabList} />

                                <TabPanel name={selectedStatus}>
                                    <WishList
                                        movieList={wishlist}
                                        watched={selectedStatus === 'watched'}
                                        movieActions={movieActions}
                                    />
                                </TabPanel>

                                <MovieEditor
                                    key={movieInEditing.name}
                                    movie={movieInEditing}
                                    updateMovie={this.handleUpdateMovie}
                                    isOpen={showEditor}
                                />
                            </Fragment>
                        )

                        : ( // No movies yet in the WishList
                            <div aria-labelledby="noMoviesText addLink" className="no-movies-container">
                                <span id="noMoviesText">
                                    No Movies in your Wish List! &nbsp;
                                    <Link id="addLink" to="/browse"
                                        aria-label="Add some movies to your wishlist now!"
                                        // innerRef is the prop used by react-router's Link to forward the ref attribute
                                        // to the underlying <a> element
                                        innerRef={this.addSomeMoviesLink}>Add some Movies!</Link>
                                </span>
                            </div>
                        )
                    }
                </main>
            </div>
        );
    }
}

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
