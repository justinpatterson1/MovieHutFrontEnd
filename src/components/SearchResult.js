import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
const SearchResult = ({name,id}) => {

    const history = useHistory()
    return (
        <div>
            
           <div className='search-bar' style={{height:'100%'}}>
           <Link to={`/MovieDescriptionPage/${id}`}><div onClick={(evt)=>{
                     evt.preventDefault()
                     history.push(`/MovieDescriptionPage/${id}`)
                 }}>{name}</div></Link>
            
            </div>
        </div>
    )
}

export default SearchResult
