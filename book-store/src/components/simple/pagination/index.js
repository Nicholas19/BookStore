import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from 'store/actions';
import { Pagination } from 'react-bootstrap';
import styles from './styles.module.scss';

const CustomPagination = (({ totalRecords, pageLimit, activePage, onPageNumberChange }) => {
    const totalPages = Math.round(totalRecords / pageLimit);
    let items = [];

    for (let i = 1; i <= totalPages; i++) {
        items.push(
            <Pagination>
                <Pagination.Item 
                    key={i + 'some'} 
                    active={i === activePage}
                    onClick={() => onPageNumberChange(i)}
                    >
                    {i}
                </Pagination.Item>
            </Pagination>
        );
    }

    return (
        <div className={styles.pagination}>
            {items}
        </div>

    );
});

CustomPagination.propTypes = {
    totalRecords: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
	return {
        pageLimit: state.books.itemsPerPage,
        activePage: state.books.activePage
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onPageNumberChange: (pageNumber) => dispatch(actions.books.setPageNumber(pageNumber)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomPagination);