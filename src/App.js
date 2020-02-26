import React, { useState } from 'react';
import './App.css';
import BookCardsContainer from './components/BookCardsContainer'
import SearchBar from './components/SearchBar'


function App() {

  const [searchTerm, searchTermOnChange] = useState("")

  return (
    <div className="App">
      <SearchBar searchTerm={searchTerm} searchTermOnChange={searchTermOnChange}/>
      <BookCardsContainer searchTerm={searchTerm}/>
    </div>
  );

}


export default App;
