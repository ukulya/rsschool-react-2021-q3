import React ,{ useState }from "react";
import Search from './Search'
import Sort from './Sort'
import Loader from './Loader'
import Pagination from './Pagination'
import Results from './Results'

function Home({data}){
    
  
    let searchName
  
    const handleInput = (e) => {
      searchName = e.target.value
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
      fetchData()
    }
  /* 
    const sortByNameASC = (e) => {
      fetch(`https://the-one-api.dev/v2/book?sort=name:asc`, {
        method: 'GET',
      })
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data')
          }
          return res.json()
        })
        .then((data) => {
          const dataDocs = data.docs
          setData(dataDocs)
          setIsPending(false)
          setError(null)
        })
        .catch((err) => {
          console.log(err.message)
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setError(err.message)
            setIsPending(false)
          }
        })
    }
  
    const sortByNameDESC = () => {
      fetch(`https://the-one-api.dev/v2/book?sort=name:desc`, {
        method: 'GET',
      })
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data')
          }
          return res.json()
        })
        .then((data) => {
          const dataDocs = data.docs
          setData(dataDocs)
          setIsPending(false)
          setError(null)
        })
        .catch((err) => {
          console.log(err.message)
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setError(err.message)
            setIsPending(false)
          }
        })
    } */
    return<div>
    <Search handleInput={handleInput} onSubmit={onSubmit} />
    {/* {isPending && <Loader />}
    {error && <div>{error}</div>}
    {data && <Results data={data}></Results>} */}
    <Results data={data}></Results>
    <Pagination />
    {/* <Sort
      sortByNameASC={sortByNameASC}
      sortByNameDESC={sortByNameDESC}
    /> */}
  </div>
}
export default Home;