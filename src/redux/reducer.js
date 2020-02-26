import { combineReducers } from 'redux';  

const searchKeywordReducer = (state = "", action) => {
  switch(action.type) {
    case "SEARCH_KEYWORD_ONCHANGE":
      return action.payload
    default:
      return state
  }
}

const renderingBooksReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCH_BOOKS":
      return action.payload
    default:
      return state
  }
}


const rootReducer = combineReducers({
  searchKeyword: searchKeywordReducer,
  renderingBooks: renderingBooksReducer
})

export default rootReducer;