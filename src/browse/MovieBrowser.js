import React from 'react';
import { Link } from 'react-router-dom';


const MovieBrowser = () => {
    return (
        <div>
            <h1>Add Movie</h1><Link to="/wishlist">Cancel</Link>
        </div>
    );
};


export default MovieBrowser;