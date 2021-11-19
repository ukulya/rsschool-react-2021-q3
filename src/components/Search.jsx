import React from "react";

const Search = ({handleInput,onSubmit}) => {

    return  <form onSubmit={onSubmit}>
    <input type="text" placeholder="Search" onChange={handleInput}/>
</form>
}

export default Search;