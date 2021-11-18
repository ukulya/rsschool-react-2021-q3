import React, {useEffect, useState } from "react";
import Search from "../components/Search";
import Sort from "../components/Sort";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import Results from "../components/Results";

const App = () => {
    /* const [quote, setQuote] = useState(null);
    const [character, setCharacter] = useState(null);
    const [books,setBooks] = useState(null) */
    const [data,setData] = useState(null) 
    const [isPending,setIsPending] = useState(true)
    const [error,setError] = useState(null)

    let searchName;

    const handleInput = (e) => {
        searchName = e.target.value;
    }

    const url = `https://the-one-api.dev/v2/${searchName}`;
    
    const fetchData = (url) => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer 5dzTQnD3A73gjpV9SlQa'
          }
        fetch(url,{
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
        fetchData(url)
    }

    const sortByNameASC = (e) => {
        setBooks(books.sort((a,b) => a.name > b.name));
        console.log(e);
    }    

    const sortByNameDESC = () => {
        setBooks(books.sort((a,b) => a.name < b.name));
    } 

    useEffect(() => {
        /* const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer 5dzTQnD3A73gjpV9SlQa'
          }
          const fetchData = async () => {
            const rawQuotes = await fetch('https://the-one-api.dev/v2/quote', {
              headers: headers
            })
            const quotes = await rawQuotes.json();
            const quote = quotes.docs[Math.floor(Math.random() * quotes?.docs?.length)];
            setQuote(quote.dialog)
            const rawCharacters = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, { headers: headers })
            const characters = await rawCharacters.json();
            const character = characters.docs[0];
            setCharacter(character.name)
          };
      
          fetchData(); */
          
        /* const abortCont = new AbortController();

        fetch('https://the-one-api.dev/v2/book',{signal: abortCont.signal})
        .then(res =>{
            if(!res.ok){
                throw Error('could not fetch the data')
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data.docs);
            console.log(data.docs[0]);
            const dataDocs = data.docs;
            setBooks(dataDocs);
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

        // return () => console.log('cleanup');
        return () => abortCont.abort(); */
    },[])

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