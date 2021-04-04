import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';
import styles from './styles.module.scss';

const CustomPagination = (({ totalRecords, pageLimit, activePage, onPageNumberChange }) => {
    const totalPages = Math.round(totalRecords / pageLimit);
    const items = [];

    for (let i = 1; i <= totalPages; i++) {
        if (totalPages < 7 || (i === activePage || i === activePage + 1 || i === activePage - 1)) {
            items.push(
                <Pagination key={i}>
                    <Pagination.Item
                        active={i === activePage}
                        onClick={() => onPageNumberChange(i)}
                    >
                        {i}
                    </Pagination.Item>
                </Pagination >
            );
        } else if ((i === activePage + 2 || i === activePage - 2) && i !== 1 && i !== totalPages) {
            items.push(
                <Pagination key={i}>
                    <Pagination.Ellipsis disabled />
                </Pagination >
            );
        }
    }

    return (
        <div className={styles.pagination}>
            <Pagination>
                <Pagination.First onClick={() => onPageNumberChange(1)} />
                <Pagination.Prev disabled={activePage === 1} onClick={() => onPageNumberChange(activePage - 1)} />
                {items}
                <Pagination.Next disabled={activePage === totalPages} onClick={() => onPageNumberChange(activePage + 1)} />
                <Pagination.Last onClick={() => onPageNumberChange(totalPages)} />
            </Pagination>
        </div>

    );
});

CustomPagination.propTypes = {
    totalRecords: PropTypes.number.isRequired,
    pageLimit: PropTypes.number,
    activePage: PropTypes.number,
    onPageNumberChange: PropTypes.func
}

CustomPagination.defaultProps = {
    totalRecords: 10,
    pageLimit: 3,
    activePage: 1,
    onPageNumberChange: function (e) { }
}

export default CustomPagination;