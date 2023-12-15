import React from "react";
import './search.css'
import { ReactComponent as SearchIcon } from "../../assests/SearchIcon.svg";
function Search({placeholder}){
    function handleSearch(e){
        e.preventDefault();
    }
    return(
        <form onSubmit={(e)=>handleSearch(e)} className="search-wrapper">
            <input className="search-search" placeholder={placeholder} required/>
            <button className="search-searchbtn" type="submit">
                <SearchIcon />
            </button>
        </form>
    )
}
export default Search;