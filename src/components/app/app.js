import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import BookList from '../book-list/book-list';
import BookAddForm from '../book-add-form/book-add-form';

import './app.css';

function App() {

  const data = [
    {isbn: 9780099511199, title:'Ulysses', author:'James Joyse', want: false, reading: true, finished: false},
    {isbn: 9781786076335, title:'Something Deeply Hidden', author:'Sean Carroll', want: true, reading: false, finished: false},
    {isbn: 9780747263746, title:'American Gods', author:'Neil Gaiman', want: false, reading: false, finished: true}
  ];

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>

        <BookList data={data}/>
        <BookAddForm/>
    </div>
  );
}

export default App;
