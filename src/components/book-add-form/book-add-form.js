import './book-add-form.css';

const BookAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add a new book</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Title" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Author" />

                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
}

export default BookAddForm;