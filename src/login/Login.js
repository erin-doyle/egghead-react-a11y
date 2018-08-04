import React from 'react';
import PropTypes from 'prop-types';


const Login = ({ history }) => {
    const goToWishlist = () => history.push('/wishlist');

    return (
        <div>
            <h1>Movie Wishlist Login</h1>
            <div>
                <input type="text" name="username" />
                <input type="password" name="password" />
                <button type="submit" name="submit" onClick={goToWishlist}>Login</button>
            </div>
        </div>
    );
};

Login.propTypes = {
    history: PropTypes.object.isRequired
};


export default Login;
