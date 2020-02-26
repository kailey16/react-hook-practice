export function searchKeywordOnChange(searchKeyword) {
  return {type: "SEARCH_KEYWORD_ONCHANGE", payload: searchKeyword}
}

function fetchedBooksWithSearchterm(books) {
  return {type: "FETCH_BOOKS", payload: books}
}

export function fetchingBooksWithSearchterm(searchterm) {
  const search = searchterm.split(" ").join("+")
  return (dispatch) => {
    fetch(`http://openlibrary.org/search.json?q=${search}`)
    .then(resp => resp.json())
    .then(books => dispatch(fetchedBooksWithSearchterm(books)))
  } 
}