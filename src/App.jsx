import React, { useState } from "react";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";
import Results from "./components/Results";

const App = () => {
    const [data,setData] = useState(null) 
    const [isPending,setIsPending] = useState(true)
    const [error,setError] = useState(null)

    let searchName;

    const handleInput = (e) => {
        searchName = e.target.value;
    }
    
    const fetchData = () => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer 5dzTQnD3A73gjpV9SlQa'
          }
        fetch(`https://the-one-api.dev/v2/book?name=${searchName}`,{
            method: 'GET',
            headers: headers
        })
        .then(res =>{
            if(!res.ok){
                throw Error('could not fetch the data')
            }
            return res.json()
        })
        .then((data)=>{
            const dataDocs = data.docs;
            setData(dataDocs);
            setIsPending(false);
            setError(null);
        })
        .catch(err =>{
            console.log(err.message);
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            } else {
                setError(err.message)
                setIsPending(false)
            }
            
        });

    }

    const onSubmit = (e) => {
        e.preventDefault();
        fetchData()
    }

    const sortByNameASC = (e) => {
        setBooks(books.sort((a,b) => a.name > b.name));
        console.log(e);
    }    

    const sortByNameDESC = () => {
        setBooks(books.sort((a,b) => a.name < b.name));
    } 

    return <div>
        <Search handleInput={handleInput} onSubmit={onSubmit}/>
        {isPending && <Loader/>}
        {error && <div>{error}</div> }
        {data && <Results data={data}></Results>}
        <Pagination/>
        <Sort sortByNameASC={sortByNameASC} sortByNameDESC={sortByNameDESC}/>
    </div>
}

export default App;