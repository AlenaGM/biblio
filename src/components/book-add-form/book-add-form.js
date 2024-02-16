import { Component } from "react";
import "./book-add-form.css";
import uniqid from "uniqid";

class BookAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqid(),
      title: "",
      author: "",
      isbn: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.author) return;
    this.props.onAdd(
      this.state.id,
      this.state.title,
      this.state.author,
      this.state.isbn
    );
    this.setState({
      title: "",
      author: "",
      isbn: "",
    });
  };

  render() {
    const { title, author, isbn } = this.state;

    return (
      <div className="app-add-form">
        <h3>Add a new book</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Title"
            name="title"
            value={title}
            onChange={this.onValueChange}
          />
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Author"
            name="author"
            value={author}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="ISBN"
            name="isbn"
            value={isbn}
            onChange={this.onValueChange}
          />

          <button
            type="submit"
            id="add-btn"
            aria-label="submit new item"
            className="btn btn-outline-light"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default BookAddForm;
