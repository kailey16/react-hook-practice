import React from 'react'

const BookCard = (props) => {
  const {title_suggest, author_name, subtitle} = props.book

  console.log(props.book)
  return (
    <div className="BookCard">
      Title: {title_suggest}<br/>
      Subtitle: {subtitle && subtitle}
      Author: {author_name && author_name.join(", ")}
    </div>
  )
}

export default BookCard