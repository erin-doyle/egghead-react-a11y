import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import MovieWishlist from './wishlist/MovieWishlist';
import MovieBrowser from './browse/MovieBrowser';


const App = () => (
    <div>
        <Switch>
            <Redirect exact from='/' to='/wishlist' />
            <Route path="/wishlist" component={MovieWishlist} />
            <Route path="/browse" component={MovieBrowser} />
        </Switch>
    </div>
);

export default App;
