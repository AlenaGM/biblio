import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import BookList from '../book-list/book-list';
import BookAddForm from '../book-add-form/book-add-form';

import './app.css';

function App() {

  const data = [
    {title:'Ulysses', author:'James Joyse'},
    {title:'Something Deeply Hidden', author:'Sean Carroll'},
    {title:'American Gods', author:'Neil Gaiman'}
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
