import BookListItem from "../book-list-item/book-list-item";

import './book-list.css';

const BookList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {

        const {isbn, ...itemProps} = item;

        return (
        <BookListItem
            key={isbn}
            {...itemProps}
            onDelete={()=> onDelete(isbn)}
            onToggleProp={(e) => onToggleProp(isbn, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default BookList;