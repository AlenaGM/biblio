import { Component } from 'react';
import './book-add-form.css';

class BookAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:'',
            author:''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    render() {
        const {title, author} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add a new book</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Title"
                        name="title"
                        value={title}
                        onChange={this.onValueChange}/>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Author"
                        name="author"
                        value={author}
                        onChange={this.onValueChange}/>

                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default BookAddForm;