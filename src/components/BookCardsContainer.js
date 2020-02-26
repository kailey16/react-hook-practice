import React from 'react'
import BookCard from './BookCard'
import { useSelector } from 'react-redux'


const BookCardsContainer = () => {

  const books = useSelector(state => state.renderingBooks)   

  return (
    <div className="BookCardsContainer">
      {books.map(book => <BookCard key={book.key} book={book}/>)}
    </div>
  )

}

export default BookCardsContainer