import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from 'routes';
import BooksList from 'screens/booksList';
import Cart from 'screens/cart';
import Order from 'screens/order';
import BookInfo from 'screens/bookInfo';
import Login from 'screens/login';
import "./styles/index.scss";
import NavBar from 'components/complex/navBar';
import { connect } from 'react-redux';
import actions from 'store/actions';

const App = ({user, onSearch}) => {
  return (
    <Router>
      <NavBar
        user={user}
        onSearch={onSearch}
      />
      <div className="container">
        <Switch>
          <Route path={routes.Home} component={BooksList} exact></Route>
          <Route path={routes.Cart} component={Cart} exact></Route>
          <Route path={routes.Order} component={Order} exact></Route>
          <Route path={`${routes.BookInfo}/:bookId`} component={BookInfo} exact></Route>
          <Route path={routes.Login} component={Login} exact></Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
	return {
		user: state.login.User,
	};
};

let mapDispatchToProps = (dispatch) => {
	return {
		onSearch: (val) => dispatch(actions.books.filterData(val))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);