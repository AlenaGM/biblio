import './book-list-item.css';

const BookListItem = (props) => {

    const {isbn, title, author, onDelete, onToggleProp, want, reading, finished, like} = props;

    let classNames = 'list-group-item d-flex justify-content-between';

    if(want){
        classNames += ' want';
    }

    if (reading) {
        classNames += ' reading';
    }

    if (finished) {
        classNames += ' finished';
    }

    if (like) {
        classNames += ' like';
    }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle="like">{title}</span>
                <input type="text" className="list-group-item-input" defaultValue={author}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-book-yellow btn-sm" onClick={onToggleProp} data-toggle="want">
                        <i className="fas fa-book"></i>
                    </button>
                    <button type="button"
                        className="btn-book-blue btn-sm" onClick={onToggleProp} data-toggle="reading">
                        <i className="fas fa-book-reader"></i>
                    </button>
                    <button type="button"
                        className="btn-book-green btn-sm" onClick={onToggleProp} data-toggle="finished">
                        <i className="fas fa-check-square"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

export default BookListItem;