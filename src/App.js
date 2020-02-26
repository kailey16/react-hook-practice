import React from 'react';
import './App.css';
import BookCardsContainer from './components/BookCardsContainer'
import SearchBar from './components/SearchBar'


function App() {

  return (
    <div className="App">
      <SearchBar />
      <BookCardsContainer/>
    </div>
  );

}


export default App;
