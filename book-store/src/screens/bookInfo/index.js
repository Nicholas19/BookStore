import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from 'store/actions';
import styles from './styles.module.scss';
import { FontAwesomeIcon, faCheckCircle, faClock, faShoppingCart, faCartArrowDown } from 'helpers/faIcons';
import { Button } from 'react-bootstrap';
import routes from 'routes';

const BookInfo = ({ items, cartItems, onAdd, onRemove }) => {
    const { bookId } = useParams();
    const book = items.find(item => item.id === Number(bookId));
    const { id, title, author, cover, description, genre, price, rest } = book;
    
    return (
        <>
            <div className="book-title">
                <h2>{title}</h2>
            </div>
            <hr />
            <div className={styles.bookData}>
                <div className="book-info">
                    <div className="book-cover">
                        <img
                            className={styles.cover}
                            src={cover}
                            alt={title}
                        >
                        </img>
                        <div>Автор: {author}</div>
                        <div>Жанр: {genre}</div>
                    </div>
                </div>
                <div className={styles.bookPurchase}>
                    <div className="book-rest">
                        {
                            rest >= 3 ?
                                <div className={styles.enough}>
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                &nbsp;
                                <span>Есть в наличии</span>
                                </div>
                                :
                                <div className={styles.runningOut}>
                                    <FontAwesomeIcon icon={faClock} />
                                &nbsp;
                                <span>Заканчивается</span>
                                </div>
                        }
                    </div>
                    <div className={styles.bookPrice}>
                        <div className={styles.price}>{price} ₴</div>
                        {!cartItems.some((el) => el === id) ?
                            <Button
                                variant="success"
                                onClick={() => onAdd(id)}
                            >
                                <FontAwesomeIcon icon={faShoppingCart} />
                                &nbsp;
                                <span>Купить</span>
                            </Button>
                            :
                            <Button
                                variant="danger"
                                onClick={() => onRemove(id)}
                            >
                                <FontAwesomeIcon icon={faCartArrowDown} />
                                &nbsp;
                                <span>Удалить из корзины</span>
                            </Button>
                        }
                    </div>
                    <div className={styles.payment}>
                        <div className={styles.paymentHeader}>Оплата</div>
                        <div className={styles.paymentContent}>Наличная, Google Pay, Картой онлайн, Безналичными для юридических лиц, Безналичными для физических лиц, Apple Pay, PrivatPay</div>
                    </div>
                    <div className={styles.warranty}>
                        <div className={styles.warrantyHeader}>Гарантия</div>
                        <div className={styles.warrantyContent}>Законом о защите прав потребителей не предусмотрено возвращение этого товара надлежащего качества.</div>
                    </div>
                    <Link to={routes.Home}>Назад к списку</Link>
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.descriptionHeader}>
                    <h3>
                        Описание
                        &nbsp;
                        <span className={styles.descriptionHeaderBook}>{`${title} - ${author}`}</span>
                    </h3>
                    
                    
                </div>
                <div className={styles.descriptionContent}>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.books.items,
        cartItems: state.cart.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (id) => dispatch(actions.cart.add(id)),
        onRemove: (id) => dispatch(actions.cart.remove(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookInfo);