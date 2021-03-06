import paintingsData from "../paintings.json";
import {combineReducers} from "redux"

// const initialState = {
//   paintings: paintingsData.paintings,
//   searchText: ""
// }

function paintingsReducer(state=paintingsData.paintings, action){
  //state = [100]
  switch (action.type) {
    case "INCREASE_VOTE":
      return state.map(painting => {
        if(painting.id !== action.paintingId){
          return painting
        }else{
          return {
            ...painting,
            votes: painting.votes + 1
          }
        }
      })
    default:
      return state
  }
}

function searchTextReducer(state="", action){
  //state = "somestring"
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  paintings: paintingsReducer,
  searchText: searchTextReducer
})

export default rootReducer
