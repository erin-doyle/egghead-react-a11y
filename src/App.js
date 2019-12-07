import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Login from './login/Login';
import MovieWishlist from './wishlist/MovieWishlist';
import MovieBrowser from './browse/MovieBrowser';
import genres from './movies';


const buildMovieList = () => {
    const movieList = {};

    Object.entries(genres).forEach(([genre, movies]) => {
        Object.entries(movies).forEach(([movieId, movie]) => {
            movieList[movieId] = {
                ...movie,
                genre
            }
        });
    });

    return movieList;
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wishlist: {}
        };

        this.movies = buildMovieList();

        this.updateMovie = this.updateMovie.bind(this);
        this.setMovieAsUnwatched = this.setMovieAsUnwatched.bind(this);
        this.setMovieAsWatched = this.setMovieAsWatched.bind(this);
        this.addMovieToWishlist = this.addMovieToWishlist.bind(this);
        this.removeMovieFromWishlist = this.removeMovieFromWishlist.bind(this);
    }

    updateMovie(movieId, updatedDetails) {
        const { wishlist } = this.state;

        if (!(movieId in wishlist)) return;

        const updatedMovie = Object.assign({}, wishlist[movieId], updatedDetails);

        this.setState({
            wishlist: Object.assign({}, wishlist, { [movieId]: updatedMovie })
        });
    }

    setMovieAsUnwatched(movieId) {
        this.updateMovie(movieId, { watched: false });
    }

    setMovieAsWatched(movieId) {
        this.updateMovie(movieId, { watched: true });
    }

    addMovieToWishlist(movieId) {
        const { wishlist } = this.state;

        if (movieId in wishlist) return;

        const newMovie = {
            ...this.movies[movieId],
            watched: false
        };

        this.setState({
            wishlist: Object.assign({}, wishlist, { [movieId]: newMovie })
        });
    }

    removeMovieFromWishlist(movieId) {
        const { wishlist } = this.state;

        if (!(movieId in wishlist)) return;

        const { [movieId]: omitMovie, ...updatedWishlist } = wishlist;

        this.setState({
            wishlist: updatedWishlist
        });
    }

    render() {
        const { wishlist } = this.state;

        return (
            <div className="page container-fluid">
                <Switch>
                    {/* Login */}
                    <Redirect exact from='/' to='/login' />
                    <Route path="/login" component={Login} />

                    {/* Wish List - default to Unwatched */}
                    <Redirect exact from='/wishlist' to='/wishlist/unwatched' />
                    <Route path="/wishlist/:status" render={(props) => (
                        <MovieWishlist
                            {...props}
                            wishlist={wishlist}
                            updateMovie={this.updateMovie}
                            setAsWatched={this.setMovieAsWatched}
                            setAsUnwatched={this.setMovieAsUnwatched}
                            removeMovie={this.removeMovieFromWishlist}
                        />
                    )}/>

                    {/* Browse - default to Action genre */}
                    <Redirect exact from='/browse' to='/browse/action' />
                    <Route path="/browse/:genre" render={(props) => (
                        <MovieBrowser
                            {...props}
                            wishlist={wishlist}
                            addToWishlist={this.addMovieToWishlist}
                            removeFromWishlist={this.removeMovieFromWishlist}
                        />
                    )} />
                </Switch>
            </div>
        );
    }
}

export default App;
