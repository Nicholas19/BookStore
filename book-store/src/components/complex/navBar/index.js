import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import routes from 'routes';
import './styles.scss';
import { FontAwesomeIcon, faShoppingCart, faBook, faCreditCard, faUserAlt, faUserCheck } from 'helpers/faIcons';


const NavBar = (({ user, onSearch }) => {

	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Navbar.Brand>
				<NavLink to={routes.Home} className="brand">
					Book Store
				</NavLink></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavLink to={routes.Home} exact className="navTabs" activeClassName="active">
						Books&nbsp;
						<FontAwesomeIcon icon={faBook} />
					</NavLink>
					<NavLink to={routes.Cart} className="navTabs" activeClassName="active">
						Cart&nbsp;
						<FontAwesomeIcon icon={faShoppingCart} />
					</NavLink>
					<NavLink to={routes.Order} className="navTabs" activeClassName="active">
						Order&nbsp;
						<FontAwesomeIcon icon={faCreditCard} />
					</NavLink>
				</Nav>
				<Form inline>
					<FormControl type="text" onChange={(e) => onSearch(e.target.value)} placeholder="Search" className="mr-sm-2" />
				</Form>
				{
					user ?
						<NavLink to={routes.Login} className="navTabs" activeClassName="active">
							<FontAwesomeIcon icon={faUserCheck} />
						</NavLink>
						:
						<NavLink to={routes.Login} className="navTabs" activeClassName="active">
							<FontAwesomeIcon icon={faUserAlt} />
						</NavLink>
				}

			</Navbar.Collapse>
		</Navbar>
	);
});

NavBar.propTypes = {
	user: PropTypes.string.isRequired,
	onSearch: PropTypes.func,
}

NavBar.defaultProps = {
	onSearch: function (e) { }
}

export default (NavBar);