export function sortASC(){
    return{
        type: 'SORT_ASC'
    }
}
export function sortDESC(){
    return{
        type: 'SORT_DESC'
    }
}
export function fetch(newBooks){
    return{
        type: 'FETCH',
        payload: newBooks
    }
}

export const fetchBooks = (fetchData) => () => (dispatch) => {
    dispatch(fetch());
    fetchData.getBooks()
      .then((data) => dispatch(fetch(data)))
      /* .catch((err) => dispatch(booksError(err))); */
  };
