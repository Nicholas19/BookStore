import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';

const BookInfo = ({cover,title,author,price,backUrl, ...props}) => {
	const { id } = useParams();

    TODO: //Make component content

    return (
        <div>
            {/* <div className="book-wrapper">
                <img src={cover} alt={title}></img>
            </div>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <hr/>
            <div>
                <strong>Price: {price}</strong> 
            </div>
            <props.linkComponent to={backUrl}>Back to list</props.linkComponent>
            <p>Text about product</p> */}
						Id: {id}
        </div>
    );
}

export default BookInfo;