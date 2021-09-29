import React,{useState,useContext} from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {HiPencil} from 'react-icons/hi'
import MovieContext from '../../Context/MovieContext'

const MovieRow = ({id,name,rating}) => {
    const {movie, setMovie} = useContext(MovieContext)
    const deleteItem = ()=>{
        fetch(`http://localhost:4000/movie/${id}`,{
        method:'Delete',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        })

        const allMovies = [...movie];
         const deletedMovie = allMovies.findIndex(m => m._id === id)

          allMovies.splice(deletedMovie,1)

        
        setMovie(allMovies)

    
    }
    return (
        <tr>
            <td></td>
            <td>{name}</td>
            <td>{rating}</td>
            <td>
                <input type="checkbox" name="featured" id="featured" />
            </td>
            <td><HiPencil/></td>
            <td onClick={deleteItem}><AiFillDelete /></td>
        </tr>  
    )

   
}

export default MovieRow
