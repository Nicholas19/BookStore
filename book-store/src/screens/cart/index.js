import React from 'react';
import { connect } from 'react-redux';
import actions from 'store/actions';
import AppMinMax from 'components/simple/inputs/minmax';
import { Link } from 'react-router-dom';
import routes from 'routes';
import styles from './styles.module.scss';

const Cart = ({ cartItems, books, onChange, onRemove }) => {
	const inCart = books.filter(item => cartItems.includes(item.id));
	const total = inCart.reduce((t, pr) => t + pr.price * pr.current, 0);

	return (
		<div>
			<h2>Cart</h2>
			<table className={`table table-bordered ${styles.table}`}>
				<thead>
					<tr>
						<td>Название</td>
						<td>Price</td>
						<td>Count</td>
						<td>Total</td>
						<td>Actions</td>
					</tr>
				</thead>
				<tbody>
					{
						inCart.map((item, i) =>
						(
							<tr key={item.id}>
								<td>{item.title}</td>
								<td>{item.price}</td>
								<td>
									<AppMinMax
										min={1}
										max={item.rest}
										cnt={item.current}
										onChange={(cnt) => onChange(item.id, cnt)}
									/>
								</td>
								<td>{item.price * item.current}</td>
								<td>
									<button
										className="btn btn-danger"
										onClick={() => onRemove(item.id)}
									>
										X
									</button>
								</td>
							</tr>
						)
						)
					}
				</tbody>
			</table>
			<h3>Total: {total}</h3>
			<hr />	
			<Link className="btn btn-warning" to={routes.Order}>
					To order
      </Link>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		cartItems: state.cart.items,
		books: state.books.items,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (id, cnt) => dispatch(actions.cart.changeCnt(id, cnt)),
		onRemove: (id) => dispatch(actions.cart.remove(id))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);