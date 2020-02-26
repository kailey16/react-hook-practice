function fetchedBooksWithSearchterm(books) {
  return {type: "FETCH_BOOKS", payload: books}
}

export function fetchingBooksWithSearchterm(searchterm) {

  const search = searchterm.split(" ").join("+")

  return (dispatch) => {
    fetch(`http://openlibrary.org/search.json?title=${search}`)
    .then(resp => resp.json())
    .then(books => dispatch(fetchedBooksWithSearchterm(books["docs"])))
  } 
}