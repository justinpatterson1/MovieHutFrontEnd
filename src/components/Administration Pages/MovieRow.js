import React,{useState,useContext,useEffect} from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {HiPencil} from 'react-icons/hi'
import MovieContext from '../../Context/MovieContext'
import UpdateContext from '../../Context/UpdateContext'
import EditFormContext from '../../Context/EditFormContext'
import FormInputContext from '../../Context/FormInputContext'
import FlyerContext from '../../Context/FlyerContext'

const MovieRow = ({id,name,rating}) => {
    const {movie, setMovie} = useContext(MovieContext)
    const {update,setUpdate} = useContext(UpdateContext)
    const {editFormVisible,setEditFormVisible} = useContext(EditFormContext)
    const {formInput,setFormInput} = useContext(FormInputContext)
    const {flyer,setFlyer} = useContext(FlyerContext)
    const [promote,setPromote] = useState(false)

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

    //need to find a way for image name to be updated as well
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

    const promoteShow = ()=>{

        let movieToBeUpdated = [...movie];

        movieToBeUpdated = movieToBeUpdated.find( m => { return m._id === id})

        const isPromoted = true;

        movieToBeUpdated.promoted = isPromoted

        console.log(movieToBeUpdated)
        fetch(`http://localhost:4000/movie/${id}`,{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body:JSON.stringify(movieToBeUpdated)
        })
        .then(res=>res.json())
        .then((json)=>{
        
            setFlyer([...flyer,{id:movieToBeUpdated._id,name:movieToBeUpdated.img}])
            console.log(json.data)
        })
        .catch(err=>console.log(err))
                  // .then(res => res.json())
                //    .then((json)=>{
                        
                //         setFlyer([...flyer,{id:json.data._id,name:json.data.img}])
                //    })             
                    
                //     }} />
    }

    const check = ()=>{
        setPromote(true)
    }

    useEffect(() => {
        
       if(promote){
           alert('hey')
       }

    }, [])

    
    return (
        
        <tr>
            <td></td>
            <td>{name}</td>
            <td>{rating}</td>
            <td>
                <input type="checkbox" name="featured" id="featured" />
            </td>
            <td>
                <input type="checkbox" name="promote" id="promote" onClick={()=>{
                   promoteShow()           
                    
                    }} />
            </td>
            <td onClick={()=>{
                updateItem()
            }}><HiPencil/></td>
            <td onClick={deleteItem}><AiFillDelete /></td>
        </tr>  
    )

   
}

export default MovieRow
