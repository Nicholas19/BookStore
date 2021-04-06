import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Form, Button, Modal, ListGroup } from 'react-bootstrap';
import actions from 'store/actions';
import styles from './styles.module.scss';

import routes from 'routes';
import { Link } from 'react-router-dom';

const Order = ({ formData, change, books, cartItems }) => {
	const { register, handleSubmit, errors } = useForm({
		mode: "onChange"
	});

	const inCart = books.filter(item => cartItems.includes(item.id));
	const total = inCart.reduce((t, pr) => t + pr.price * pr.current, 0);

	const [showModal, setShowModal] = useState(false);

	const show = () => {
		setShowModal(true);
	}

	const hide = () => {
		setShowModal(false);
	}

	const formValid = () => {
		if (Object.keys(errors).length) {
			return false;
		}

		return true;
	}

	const onSubmit = (data) => {
		if (cartItems.length > 0) {
			change(data);
			show();
		} else {
			alert("Ваша корзина пуста! Добавьте товар в корзину!");
		}
	}

	return (
		<div>
			<h2>Order</h2>
			<hr />
			<Form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				{			
				Object.values(formData).map(item => {
					return (
					<Form.Group key={item.label} controlId={'order-form-' + item.label}>
						<Form.Label>{item.label}</Form.Label>
						<Form.Control
							name={item.label}
							ref={register({
								required: true,
								pattern: item.pattern
							})}
							placeholder={item.label}
							type="text"
							style={{ borderColor: errors[item.label] && "red" }}
						/>
						{!errors[item.label] ? '' :
							<Form.Text className="text-muted">
								{item.errorText}
							</Form.Text>
						}
					</Form.Group>
					)
				})
				}
				<Link className="btn btn-warning" to={routes.Cart}>
					Back to cart
      	</Link>
     		&nbsp;
				<Button
					variant="primary"
					disabled={!formValid()}
					type="submit"
				>
					Apply order
  			</Button>
			</Form>

			<Modal
				show={showModal}
				backdrop="static"
				onHide={hide}
				size="lg"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Your order is accepted!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<table className={`table table-bordered ${styles.table}`}>
						<thead>
							<tr>
								<td>Книга</td>
								<td>Автор</td>
								<td>Цена</td>
								<td>Количество</td>
								<td>Суммарно</td>
							</tr>
						</thead>
						<tbody>
							{
								inCart.map((item, i) =>
								(
									<tr key={item.id}>
										<td>{item.title}</td>
										<td>{item.author}</td>
										<td>{item.price}</td>
										<td>{item.current}</td>
										<td>{item.price * item.current}</td>
									</tr>
								)
								)
							}
						</tbody>
					</table>
					<div className={styles.customerData}>
						<h4>Данные для связи</h4>
						<ListGroup horizontal>
							<ListGroup.Item variant="info">{formData.name.value}</ListGroup.Item>
							<ListGroup.Item variant="info">{formData.phone.value}</ListGroup.Item>
							<ListGroup.Item variant="info">{formData.email.value}</ListGroup.Item>
						</ListGroup>
					</div>
				</Modal.Body>
				<Modal.Footer className={styles.footer}>
					<h4>Total: {total}</h4>
					<Button variant="info" onClick={hide}>
						Get back motherfucker
          </Button>
				</Modal.Footer>
			</Modal>

		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		formData: state.order.formData,
		cartItems: state.cart.items,
		books: state.books.items
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		change: (data) => dispatch(actions.order.changeFormData(data))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);