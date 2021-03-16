import React from 'react';
import apiClient from '../services/api';

const Books = () => {
    const [books, setBooks] = React.useState([]);
    React.useEffect(() => {
        apiClient.get('http://localhost:8000/api/book')
        .then(response => {
            setBooks(response.data)
        })
        .catch(error => console.error(error));
    }, []);
    const bookList = books.map((book) => 
        <li key={book.id}>{book.title}</li>
    );
    return (
        <ul>{bookList}</ul>
    );
}

export default Books;