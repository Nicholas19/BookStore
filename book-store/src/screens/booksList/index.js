import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Book from 'components/complex/book';
import actions from 'store/actions';
import styles from "./styles.module.scss";
import Pagination from 'components/simple/pagination';

const BooksList = (({ items, itemsPerPage, activePage, onAdd, onRemove, cartItems, totalRecords, userName, onPageNumberChange, getUserName }) => {
	const itemsForDisplay = items.filter((item, i) => i >= activePage * itemsPerPage - itemsPerPage && i < activePage * itemsPerPage);

	useEffect(() => {
		const user = localStorage.getItem('userName');
		if(user){
			getUserName(user);
		}
  }, []);

	return (
		<>
			<div className={styles.booksList}>
				{itemsForDisplay.map(({ id, title, cover, price }) =>
				(
					<Book
						key={id}
						id={id}
						title={title}
						cover={cover}
						price={price}
						onAdd={() => onAdd(id)}
						onRemove={() => onRemove(id)}
						disabled={!cartItems.some((el) => el === id)}
						user={userName}
					/>
				)
				)}
			</div>
			<Pagination 
				totalRecords={totalRecords}
				pageLimit={itemsPerPage}
				activePage={activePage}
				onPageNumberChange={onPageNumberChange}
			/>
		</>
	);
});

const mapStateToProps = (state) => {
	return {
		items: state.books.items,
		totalRecords: state.books.items.length,
		itemsPerPage: state.books.itemsPerPage,
		activePage: state.books.activePage,
		cartItems: state.cart.items,
		userName: state.login.User
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAdd: (id) => dispatch(actions.cart.add(id)),
		onRemove: (id) => dispatch(actions.cart.remove(id)),
		onPageNumberChange: (pageNumber) => dispatch(actions.books.setPageNumber(pageNumber)),
		getUserName: (userName) => dispatch(actions.login.getUser(userName))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);