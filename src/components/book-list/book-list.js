import BookListItem from "../book-list-item/book-list-item";

import './book-list.css';

const BookList = ({data}) => {

    const elements = data.map(item => {
        return (
        <BookListItem {...item}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default BookList;