import React from 'react'

const Search = (props) => {
    return (
       
            <div id="search" className={props.searchBarVisibility?"":"hide"} >
                <input type="text" name="search" id="search-bar" placeholder="Search Name Of Movie...." />
            </div>
        
    )
}

export default Search
