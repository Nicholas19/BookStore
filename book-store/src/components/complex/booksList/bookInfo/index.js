import React from 'react';

const BookInfo = ({cover,title,author,price,backUrl}) => {

    return (
        <div>
            <div className="book-wrapper">
                <img src={cover} alt={title}></img>
            </div>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <hr/>
            <div>
                <strong>Price: {price}</strong> 
            </div>
            <props.linkComponent to={backUrl}>Back to list</props.linkComponent>
            <p>Text about product</p>
        </div>
    );
}

export default BookInfo;