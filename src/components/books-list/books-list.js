import BooksListItem from "../books-list-item/books-list-item";

import './books-list.css';

const BooksList = () => {
    return (
        <ul className="app-list list-group">
            <BooksListItem/>
            <BooksListItem/>
            <BooksListItem/>
        </ul>
    )
}

export default BooksList;