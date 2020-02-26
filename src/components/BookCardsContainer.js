import React from 'react'
import BookCard from './BookCard'


const BookCardsContainer = () => {

  return (
    <div className="BookCardsContainer">
      {books.map(book => <BookCard key={book.id} book={book}/>)}
    </div>
  )
}

export default BookCardsContainer