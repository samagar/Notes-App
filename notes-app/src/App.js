import './App.css';
import NoteMain from './components/NoteMain';
import TopCmp from './components/TopCmp';
import SearchCmp from './components/SearchCmp';

function App() {
  return (
    <div>
      <h3>Sandeep's Note App</h3>
      <TopCmp></TopCmp>
    <div className='body-pane-left'>
        <SearchCmp></SearchCmp></div>
    <div className='body-pane-right'> 
          <NoteMain></NoteMain></div>
    </div>
  );
}

export default App;
