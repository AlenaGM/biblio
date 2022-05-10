import './book-list-item.css';

const BookListItem = ({title, author, want, reading, finished}) => {

    let classNames = 'list-group-item d-flex justify-content-between';

    if(want){
        classNames += ' want';
    } else if (reading) {
        classNames += ' reading';
    } else if (finished) {
        classNames += ' finished';
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label">{title}</span>
            <input type="text" className="list-group-item-input" defaultValue={author}/>
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

export default BookListItem;