import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isUsernameValid: true,
            isPasswordValid: true
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        })
    }

    validateForm() {
        const { username, password } = this.state;

        const isUsernameValid = !!username;
        const isPasswordValid = !!password;

        this.setState({
            isUsernameValid,
            isPasswordValid
        });

        return isUsernameValid && isPasswordValid;
    }

    onSubmit() {
        const { history } = this.props;

        const isFormValid = this.validateForm();

        if (isFormValid) {
            history.push('/wishlist');
        }
    }

    render() {
        const { isUsernameValid, isPasswordValid } = this.state;
        const usernameClasses = `form-control ${!isUsernameValid ? 'is-invalid' : ''}`;
        const passwordClasses = `form-control ${!isPasswordValid ? 'is-invalid' : ''}`;

        return (
            <div className="login row align-items-center">
                <div className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5">
                    <header>
                        <h1>Movie Wishlist</h1>
                    </header>
                    <main>
                        <div className="card bg-primary">
                            <h2 className="card-header">
                                 Login
                            </h2>

                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="field-username">Username
                                            <input
                                                id="field-username"
                                                type="text"
                                                name="username"
                                                className={usernameClasses}
                                                placeholder="Enter username"
                                                onChange={this.handleUsernameChange}
                                            />
                                        </label>
                                        <div className="invalid-feedback">
                                            Please provide a Username.
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="field-password">Password
                                            <input
                                                id="field-password"
                                                type="password"
                                                name="password"
                                                className={passwordClasses}
                                                placeholder="Password"
                                                onChange={this.handlePasswordChange}
                                            />
                                        </label>
                                        <small className="form-text text-muted">
                                            Passwords are case sensitive
                                        </small>
                                        <div className="invalid-feedback">
                                            Please provide a Password.
                                        </div>
                                    </div>

                                    <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Login</button>
                                </form>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    history: PropTypes.object.isRequired
};


export default Login;
