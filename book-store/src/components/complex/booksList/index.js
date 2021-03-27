import React from 'react';
import { connect } from 'react-redux';
import Book from './../book';
import actions from 'store/actions';
import Pagination from 'components/simple/pagination';
import styles from "./styles.module.scss";

const BooksList = (({ items, itemsPerPage, activePage, onAdd, onRemove, cartItems }) => {
	const itemsForDisplay = items.filter((item, i) => i >= activePage * itemsPerPage - itemsPerPage &&  i < activePage * itemsPerPage);

	return (
		<div>
			<div className={styles.booksList}>
				{itemsForDisplay.map(({ id, title, cover, price }) =>
				(
					<Book
						key={id}
						title={title}
						cover={cover}
						price={price}
						onAdd={() => onAdd(id)}
						onRemove={() => onRemove(id)}
						disabled={!cartItems.some((el) => el === id)}
					/>
				)
				)}
			</div>

			<Pagination
				totalRecords={items.length}
			/>

		</div>
	);
});

const mapStateToProps = (state) => {
	// console.log("state:", state);
	return {
		items: state.books.items,
		itemsFiltered: state.books.itemsFiltered,
		itemsPerPage: state.books.itemsPerPage,
		activePage: state.books.activePage,
		cartItems: state.cart.items
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAdd: (id) => dispatch(actions.cart.add(id)),
		onRemove: (id) => dispatch(actions.cart.remove(id)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);