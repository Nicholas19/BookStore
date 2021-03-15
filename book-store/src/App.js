import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from 'routes';
import BooksList from 'screens/books';
import Cart from 'screens/cart';
import Order from 'screens/order';

import "./styles/index.scss";

import NavBar from 'components/complex/navBar';


function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path={routes.Home} component={BooksList} exact></Route>
          <Route path={routes.Cart} component={Cart} exact></Route>
          <Route path={routes.Order} component={Order} exact></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;