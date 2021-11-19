import { createStore } from "redux";

const initialState = {
    data: null,
    isPending: false,
    icLoading: true     
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
      case 'SORT_ASC':
        return {
          data: [],
          loading: true,
          error: null
        };
        case 'FETCH':
        return {
          data: action.payload,
          /* loading: true,
          error: null */
        };
  
      default:
        return state.bookList;
    }
  };

const store = createStore(reducer)
export default store;
