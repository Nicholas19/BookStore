import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const Book = ((props) => {
	const { title, cover, price } = props;
	return (
		<div className="col-4">
			<div className={styles.book}>
				<Card.Img variant="top" src={cover} className={styles.image} />
				<div className="book-info">
					<div className="book-title">
						<h5>{title}</h5>
					</div>
					<div className={styles.bookPrice}>
						<div>
							<span className="book-price__price-value">{price}</span>
							&nbsp;
							<span className="book-price__price-currency">₴</span>
						</div>
						<Button
							variant="success"
							className="book-buy"
							onClick={() => props.onAdd(props.id)}
						>
							<FontAwesomeIcon icon={faShoppingCart} />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
});

Book.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string,
	cover: PropTypes.string,
	price: PropTypes.number,
	onAdd: PropTypes.func,
	onRemove: PropTypes.func,
}

Book.defaultProps = {
	title: '',
	cover: '',
	price: 0,
	onAdd: function (e) { },
	onRemove: function (e) { }
}

export default Book;