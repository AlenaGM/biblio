import { Component } from 'react';
import './book-list-item.css';

class BookListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            want: false,
            reading: false,
            finished: false,
            like: false
        }
    }

    onWant = () => {
        this.setState(({want}) => ({
            want: !want
        }))
    }

    onReading = () => {
        this.setState(({reading}) => ({
            reading: !reading
        }))
    }

    onFinished = () => {
        this.setState(({finished}) => ({
            finished: !finished
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {title, author, onDelete} = this.props;
        const {want, reading, finished, like} = this.state;

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
                <span className="list-group-item-label" onClick={this.onLike}>{title}</span>
                <input type="text" className="list-group-item-input" defaultValue={author}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-book-yellow btn-sm" onClick={this.onWant}>
                        <i className="fas fa-book"></i>
                    </button>
                    <button type="button"
                        className="btn-book-blue btn-sm" onClick={this.onReading}>
                        <i className="fas fa-book-reader"></i>
                    </button>
                    <button type="button"
                        className="btn-book-green btn-sm" onClick={this.onFinished}>
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
}

export default BookListItem;