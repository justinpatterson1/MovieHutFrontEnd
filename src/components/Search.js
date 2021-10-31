import React,{useState,useContext} from 'react'
import SearchResult from '../components/SearchResult'
import SearchContext from '../Context/SearchContext'
import {ImCancelCircle} from 'react-icons/im'

const Search = (props) => {

    const [ searchBar,setSearchBar] = useState({value:''})
    
        const [ results,setResults] = useState([{_id:0,name:''}])
        const {searchBarVisibility, setSearchBarVisibility}= useContext(SearchContext);
    const search = ()=>{
        fetch(`http://localhost:4000/movie?q=${searchBar.value}`)
        .then(res=>res.json())
        .then((json)=>{
            setResults(json.data)
            console.log(json.data)
        })
        .catch(err => console.log(`error is ${err}`))
    }
    return (
        <>
            <div id="search" className={props.searchBarVisibility?"grid col-2 search-bar":"hide"} >
                <input id='search-input'type="text" name="search" className="" style={{backgroundColor:"transparent",border:'none'}}value={searchBar.value} placeholder="Search Name Of Movie...." onChange={(evt)=>{

                        setSearchBar({
                            value:evt.target.value
                        })
                        //search()
                        
                        fetch(`http://localhost:4000/movie?q=${evt.target.value}`)
                        .then(res=>res.json())
                        .then((json)=>{
                            if(!evt.target.value==" "){
                            setResults(json.data)
                            console.log(json.data)
                            }else{
                                setResults([{_id:0,name:''}])
                            }
                        })
                        .catch(err => console.log(`error is ${err}`))
                        

                }}/>
                <ImCancelCircle className='mr-2' style={{justifySelf:'end'}} onClick={()=>{
                    setSearchBar({value:''})
                setResults([{_id:0,name:''}])
                setSearchBarVisibility(false)
            }}/>
            </div>
            <div>
                {
                    results.map((r)=>(<SearchResult key={r._id} id={r._id} name={r.name}  setSearchBar={setSearchBar}/>)) 
                }
               
            </div>
        </>
    )
}

export default Search
