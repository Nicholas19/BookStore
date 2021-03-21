import React from 'react';

const BookInfo = (props) => {

    return (
        <div>
            <div className="book-wrapper">
                <img src={props.cover} alt={props.title}></img>
            </div>
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <hr/>
            <div>
                <strong>Price: {props.price}</strong> 
            </div>
            <props.linkComponent to={props.backUrl}>Back to list</props.linkComponent>
            <p>Text about product</p>
        </div>
    );
}

export default BookInfo;