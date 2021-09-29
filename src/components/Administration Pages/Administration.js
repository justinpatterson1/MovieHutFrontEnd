import React,{useContext,useEffect} from 'react'

import MovieContext from '../../Context/MovieContext'
import MovieRow from '../Administration Pages/MovieRow'


const Administration = () => {

    const {movie,setMovie} = useContext(MovieContext);
    console.log(movie)
   

    const movieList = ()=>
    {
        fetch(`http://localhost:4000/movie/Movie`)
        .then(res=>res.json())
        .then((json)=>{
        
            setMovie(json.data)
            console.log(json.data)
        })
        .catch(err=>console.log(err))
    }

    const tvShowList = ()=>{
        fetch(`http://localhost:4000/movie/Tv Show`)
        .then(res=>res.json())
        .then((json)=>{
        
            setMovie(json.data)
            console.log(json.data)
        })
        .catch(err=>console.log(err))
    }

   
    return (
        <div id='admin-page'>
        <div id="type-selector"  >
            <div className='grid col-2' style={{textAlign:"center"}}>
                <div style={{borderRight:"2px solid white"}}>
                     <div onClick={movieList}>Movies</div>
                </div>
                <div>
                    <div onClick={tvShowList}>Tv Show</div>
                </div>
               
            </div>
        </div>
        
        <table id='content-table' className=''>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Featured</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
           {
                
                movie.map(content=>(<MovieRow id={content._id} key={content._id} name={content.name} rating={content.rating} />))
                }
           
        </table>
        
    </div>
    )
}

export default Administration
