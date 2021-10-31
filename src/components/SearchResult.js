import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import SearchContext from '../Context/SearchContext'
const SearchResult = ({name,id,setSearchBar}) => {

    const history = useHistory()
    const {searchBarVisibility, setSearchBarVisibility}=useContext(SearchContext)
    return (
        <div>
            
           <div className={searchBarVisibility?'search-bar':'hide'} style={{height:'100%'}}>
           <Link to={`/MovieDescriptionPage/${id}`}><div onClick={(evt)=>{
                     evt.preventDefault()
                     history.push(`/MovieDescriptionPage/${id}`)
                     setSearchBarVisibility(false)
                     setSearchBar({value:''})
                 }}>{name}</div></Link>
            
            </div>
        </div>
    )
}

export default SearchResult
