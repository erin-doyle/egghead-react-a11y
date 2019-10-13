import React from 'react';
import PropTypes from 'prop-types';


const MovieBrowser = ({ history }) => {
    const goToWishlist = () => history.push('/wishlist');

    return (
        <div>
            <div><h1>Add Movie</h1></div><div><button onClick={goToWishlist}>Cancel</button></div>
        </div>
    );
};

MovieBrowser.propTypes = {
    history: PropTypes.object.isRequired
};


export default MovieBrowser;