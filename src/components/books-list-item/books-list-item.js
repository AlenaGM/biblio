import './books-list-item.css';

const BooksListItem = () => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">John Smith</span>
            <input type="text" className="list-group-item-input" defaultValue="1000$"/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-book-yellow btn-sm">
                    <i className="fas fa-book"></i>
                </button>
                <button type="button"
                    className="btn-book-blue btn-sm ">
                    <i className="fas fa-book-reader"></i>
                </button>
                <button type="button"
                    className="btn-book-green btn-sm ">
                    <i className="fas fa-check-square"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default BooksListItem;