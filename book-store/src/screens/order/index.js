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
		for (const key in errors) {
			return false;
		}

		return true;
	}

	const formFields = [];

	for (let name in formData) {
		const field = formData[name];

		formFields.push(
			<Form.Group key={name} controlId={'order-form-' + name}>
				<Form.Label>{field.label}</Form.Label>
				<Form.Control
					name={name}
					ref={register({
						required: true,
						pattern: field.pattern
					})}
					placeholder={field.label}
					type="text"
					style={{ borderColor: errors[name] && "red" }}
				/>
				{!errors[name] ? '' :
					<Form.Text className="text-muted">
						{field.errorText}
					</Form.Text>
				}
			</Form.Group>
		);
	}

	const onSubmit = (data) => {
		change(data);
		show();
	}

	return (
		<div>
			<h2>Order</h2>
			<hr />
			<Form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				{formFields}
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