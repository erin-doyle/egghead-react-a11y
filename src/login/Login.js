import React from 'react';
import PropTypes from 'prop-types';


const Login = ({ history }) => {
    const goToWishlist = () => history.push('/wishlist');

    return (
        <div className="login row align-items-center">
           <div className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5">
                <div className="card bg-primary">
                    <h5 className="card-header">
                        Movie Wishlist Login
                    </h5>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" name="username" className="form-control" placeholder="Enter username" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" placeholder="Password" />
                            <small className="form-text text-muted">Passwords are case sensitive</small>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={goToWishlist}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {
    history: PropTypes.object.isRequired
};


export default Login;
