import React from 'react';
import { Link } from 'react-router-dom';


const MovieWishlist = () => {
    return (
        <div>
            <h1>Movie Wishlist</h1><Link to="/browse">Add</Link>
        </div>
    );
};


export default MovieWishlist;