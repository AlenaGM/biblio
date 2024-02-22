import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookOpenReader,
  faSquareCheck,
  faTrash,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import "./book-list-item.css";

const BookListItem = (props) => {
  const {
    title,
    author,
    onDelete,
    onToggleProp,
    want,
    reading,
    finished,
    like,
  } = props;

  let classNames = "list-group-item d-flex justify-content-between";

  if (want) {
    classNames += " want";
  }
  if (reading) {
    classNames += " reading";
  }
  if (finished) {
    classNames += " finished";
  }
  if (like) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-toggle="like"
        aria-label="book title"
      >
        {title}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={author}
        aria-label="book author"
        disabled
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          aria-label="want-to-read button"
          className="btn-book-yellow btn-sm"
          onClick={onToggleProp}
          data-toggle="want"
        >
          <FontAwesomeIcon icon={faBook} />
        </button>
        <button
          type="button"
          aria-label="reading-now button"
          className="btn-book-blue btn-sm"
          onClick={onToggleProp}
          data-toggle="reading"
        >
          <FontAwesomeIcon icon={faBookOpenReader} />
        </button>
        <button
          type="button"
          aria-label="finished-to-read button"
          className="btn-book-green btn-sm"
          onClick={onToggleProp}
          data-toggle="finished"
        >
          <FontAwesomeIcon icon={faSquareCheck} />
        </button>
        <button
          type="button"
          aria-label="delete-item button"
          className="btn-trash btn-sm"
          onClick={onDelete}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button
          type="button"
          aria-label="like-item button"
          className="btn-sm"
          onClick={onToggleProp}
          data-toggle="like"
        >
          <FontAwesomeIcon icon={faStar} />
        </button>
      </div>
    </li>
  );
};

export default BookListItem;
