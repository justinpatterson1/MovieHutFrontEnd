import React,{useState,useContext} from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {HiPencil} from 'react-icons/hi'
import MovieContext from '../../Context/MovieContext'
import UpdateContext from '../../Context/UpdateContext'
import EditFormContext from '../../Context/EditFormContext'
import FormInputContext from '../../Context/FormInputContext'

const MovieRow = ({id,name,rating}) => {
    const {movie, setMovie} = useContext(MovieContext)
    const {update,setUpdate} = useContext(UpdateContext)
    const {editFormVisible,setEditFormVisible} = useContext(EditFormContext)
    const {formInput,setFormInput} = useContext(FormInputContext)

    const deleteItem = ()=>{
        fetch(`http://localhost:4000/movie/${id}`,{
        method:'DELETE',
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

    const updateItem = ()=>{

      
        // fetch(`http://localhost:4000/movie/6153c488e2eb8ac723f62c60`)
        // .then(res=>res.json())
        // .then((json)=>{
        
        //     setFormInput(
        //         json.data
        //     )
        //     console.log(formInput)
        // })
        // .catch(err=>console.log(err))

        //  setUpdate(true)
        //  setEditFormVisible(true)   
        let updatedMovie = [...movie];

        updatedMovie = updatedMovie.find((m)=> {return m._id === id})

        setFormInput({
            name:updatedMovie.name,
            rating:updatedMovie.rating,
            price:updatedMovie.price,
            featured:updatedMovie.featured,
            description:updatedMovie.description,
            type:updatedMovie.type,
            genre:updatedMovie.genre,
            trailer:updatedMovie.trailer,
           // img:updatedMovie.img
        })
    
         setUpdate(true)
         setEditFormVisible({visibility:true,id:updatedMovie._id})  
        

    }

    
    return (
        
        <tr>
            <td></td>
            <td>{name}</td>
            <td>{rating}</td>
            <td>
                <input type="checkbox" name="featured" id="featured" />
            </td>
            <td onClick={()=>{
                updateItem()
            }}><HiPencil/></td>
            <td onClick={deleteItem}><AiFillDelete /></td>
        </tr>  
    )

   
}

export default MovieRow
