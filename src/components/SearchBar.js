import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchingBooksWithSearchterm } from '../redux/action'

const SearchBar = () => {

  const [searchTerm, searchTermOnChange] = useState("")
  const dispatch = useDispatch()

  return (
    <div className="SearchBar">
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(fetchingBooksWithSearchterm(searchTerm))}}>
        <input type="text" onChange={(e) => searchTermOnChange(e.target.value)} value={searchTerm}/>
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default SearchBar