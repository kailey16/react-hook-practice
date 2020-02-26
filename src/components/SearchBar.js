import React from 'react'

const SearchBar = (props) => {
  return (
    <div className="SearchBar">
      <form>
        <input type="text" onChange={(e) => props.searchTermOnChange(e.target.value)} value={props.searchTerm}/>
      </form>
    </div>
  )
}

export default SearchBar