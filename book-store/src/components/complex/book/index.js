import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon, faShoppingCart, faCartArrowDown } from 'helpers/faIcons';

const Book = (({title, cover, price, ...props}) => {

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
						{props.disabled ? 
						<Button
							variant="success"
							className="book-buy"
							onClick={props.onAdd}
						>
						<FontAwesomeIcon icon={faShoppingCart} />
						</Button> 
						:
						<Button
							variant="danger"
							className="book-buy"
							onClick={props.onRemove}
						>
							<FontAwesomeIcon icon={faCartArrowDown} />
						</Button>
						} 
					</div>
				</div>
			</div>
		</div>
	);
});

Book.propTypes = {
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