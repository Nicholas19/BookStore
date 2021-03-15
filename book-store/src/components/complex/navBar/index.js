import React, {useState} from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from 'routes';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const NavBar = ((props) => {

	// let [searchValue, setsearchValue] = useState('');

	// const Search = (text, ppartial) => {
	// 	console.log(text);
	// 	// return text.toLowerCase().indexOf(partial.toLowerCase()) > -1;
	// }
	

	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#home">Book Store</Navbar.Brand>
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
					<FormControl type="text" /*onChange={(e) => Search(e.target.value)}*/ placeholder="Search" className="mr-sm-2" />
					{/* <Button variant="outline-success">Search</Button> */}
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
});

const mapStateToProps = (state) => {
	return {
		items: state.books.items,
	};
};

export default connect(mapStateToProps, null)(NavBar);