import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import BookList from '../book-list/book-list';
import BookAddForm from '../book-add-form/book-add-form';

import './app.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [
          {isbn: 9780099511199, title:'Ulysses', author:'James Joyse', want: false, reading: false, finished: false},
          {isbn: 9781786076335, title:'Something Deeply Hidden', author:'Sean Carroll', want: false, reading: false, finished: false},
          {isbn: 9780747263746, title:'American Gods', author:'Neil Gaiman', want: false, reading: false, finished: false}
        ]
    }
  }

  deleteItem = (isbn) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.isbn !== isbn)
      }
    })
  }

  addItem = (isbn, title, author) => {
    const newItem = {
      isbn,
      title,
      author,
      want: false,
      reading: false,
      finished: false
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  onToggleProp = (isbn, prop) => {
    this.setState(({data}) => ({
        data: data.map(item => {
            if (item.isbn === isbn) {
                return {...item, [prop]: !item[prop]}
            }
            return item;
        })
    }))
}

  render(){
    const books = this.state.data.length;
    const wanted = this.state.data.filter(item => item.want).length;
    const isreading = this.state.data.filter(item => item.reading).length;
    const isfinished = this.state.data.filter(item => item.finished).length;

    return (
      <div className="app">
          <AppInfo books={books} wanted={wanted} isreading={isreading} isfinished={isfinished}/>

          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>

          <BookList
            data={this.state.data}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}/>
          <BookAddForm
            onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
