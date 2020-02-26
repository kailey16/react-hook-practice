import { combineReducers } from 'redux';  


const renderingBooksReducer = (state = [], action) => {
  switch(action.type) {
    case "FETCH_BOOKS":
      return action.payload
    default:
      return state
  }
}


const rootReducer = combineReducers({
  renderingBooks: renderingBooksReducer
})

export default rootReducer;