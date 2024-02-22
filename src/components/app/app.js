import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import BookList from "../book-list/book-list";
import BookAddForm from "../book-add-form/book-add-form";
import data from "../../resources/data/booklist.json";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      term: "",
      filter: "all",
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (id, title, author, isbn) => {
    const newItem = {
      id,
      title,
      author,
      isbn,
      want: false,
      reading: false,
      finished: false,
      like: false,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
    console.log(newItem);
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return (
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.author.toLowerCase().includes(term.toLowerCase())
      );
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "want":
        return items.filter((item) => item.want);
      case "reading":
        return items.filter((item) => item.reading);
      case "finished":
        return items.filter((item) => item.finished);
      case "like":
        return items.filter((item) => item.like);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const books = this.state.data.length;
    const wanted = this.state.data.filter((item) => item.want).length;
    const isreading = this.state.data.filter((item) => item.reading).length;
    const isfinished = this.state.data.filter((item) => item.finished).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo
          books={books}
          wanted={wanted}
          isreading={isreading}
          isfinished={isfinished}
        />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <BookList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <BookAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
