import React,{useState,useContext,useEffect} from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {HiPencil} from 'react-icons/hi'
import MovieContext from '../../Context/MovieContext'
import UpdateContext from '../../Context/UpdateContext'
import EditFormContext from '../../Context/EditFormContext'
import FormInputContext from '../../Context/FormInputContext'
import FlyerContext from '../../Context/FlyerContext'
import FeaturedFilmContext from '../../Context/FeaturedFilmContext'

const MovieRow = ({id,name,rating,img}) => {
    const {movie, setMovie} = useContext(MovieContext)
    const {update,setUpdate} = useContext(UpdateContext)
    const {editFormVisible,setEditFormVisible} = useContext(EditFormContext)
    const {formInput,setFormInput} = useContext(FormInputContext)
    const {flyer,setFlyer} = useContext(FlyerContext)
    const {featuredFilms,setFeaturedFilms} = useContext(FeaturedFilmContext)
    const [promote,setPromote] = useState(false)

    const deleteItem = (evt)=>{

    
       evt.preventDefault()

         const allMovies = [...movie];
         const deletedMovie = allMovies.find(m => m._id === id)

         console.log(deletedMovie)
         if(window.confirm(`Are you sure you want to delete ${deletedMovie.name}`)){
            fetch(`http://localhost:4000/movie/${id}`,{
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  }
                })
            allMovies.splice(deletedMovie,1)
            setMovie(allMovies)
         }

    
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
        
            setFlyer([...flyer,{id:movieToBeUpdated._id,name:movieToBeUpdated.poster}])
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

    const addFeaturedMovie = ()=>{
        let featuredMovie = [...movie];

        featuredMovie = featuredMovie.find((m)=>{return m._id === id})

        featuredMovie.featured = true;

        fetch(`http://localhost:4000/movie/${id}`,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(featuredMovie)
        })
        .then(res=>res.json())
        .then((json)=>{

            setFeaturedFilms([...featuredFilms,featuredMovie])
        })
        .catch(err=>console.log(err))
    }

    // useEffect(() => {
        
    //    if(promote){
    //        alert('hey')
    //    }

    // }, [])

    
    return (
        
        <tr>
            <td>
                <img style={{height:'100px',width:'100px'}} src={img}/>
            </td>
            <td>{name}</td>
            <td>{rating}</td>
            <td>
                <input type="checkbox" name="featured" id="featured"onClick={()=>{
                    addFeaturedMovie()
                }} />
            </td>
            <td>
                <input type="checkbox" name="promote" id="promote" onClick={()=>{
                   promoteShow()           
                    
                    }} />
            </td>
            <td onClick={()=>{
                updateItem()
            }}><HiPencil/></td>
            <td onClick={(evt)=>{deleteItem(evt)}}><AiFillDelete /></td>
        </tr>  
    )

   
}

export default MovieRow
