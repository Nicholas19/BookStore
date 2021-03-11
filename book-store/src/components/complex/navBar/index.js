import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import { Home_link, Cart_link, Order_link } from './../../../routes';
import BooksList from './../../../screens/booksList';
import Cart from './../../../screens/cart';
import Order from './../../../screens/order';

import styles from './../navBar/styles.scss';

const NavBar = (() => {
	return (
		<Router>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavLink to={Home_link} exact className={styles.navTabs} activeClassName="">
							Books
							</NavLink>
						<NavLink to={Cart_link} className={styles.navTabs} activeClassName="active">
							Cart
					</NavLink>
						<NavLink to={Order_link} className={styles.navTabs} activeClassName="active">
							Order
					</NavLink>
					</Nav>
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
			<Switch>
				<Route path={Home_link} component={BooksList} exact></Route>
				<Route path={Cart_link} component={Cart} exact></Route>
				<Route path={Order_link} component={Order} exact></Route>
			</Switch>
		</Router>
	);
});

export default NavBar;