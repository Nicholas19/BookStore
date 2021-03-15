import React from 'react';
import { connect } from 'react-redux';
import Book from './../book';

const BooksList = ((props) => {
	const books = props.items.map((item) => {
		return (
			<Book key={item.id} title={item.title} cover={item.cover} price={item.price} />
		)
	});

	return (
		<div className="row">
			{books}
		</div>

	);
});

const mapStateToProps = (state) => {
	// console.log("state:", state);
	return {
		items: state.books.items,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, null)(BooksList);