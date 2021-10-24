import React,{useContext,useEffect,useState} from 'react'
import {AiFillFileAdd} from 'react-icons/ai'
import MovieContext from '../../Context/MovieContext'
import MovieRow from '../Administration Pages/MovieRow'
import EditModal from './EditModal'
import EditFormContext from '../../Context/EditFormContext'


const Administration = () => {

    const {movie,setMovie} = useContext(MovieContext);
    const {editFormVisible,setEditFormVisible} = useContext(EditFormContext)
    console.log(movie)
   
    const allShows = ()=>
    {
        fetch(`http://localhost:4000/movie`)
        .then(res=>res.json())
        .then((json)=>{
        
            setMovie(json.data)
            console.log(json.data)
        })
        .catch(err=>console.log(err))
    }

    const movieList = ()=>
    {
        fetch(`http://localhost:4000/movie?type=Movie`)
        .then(res=>res.json())
        .then((json)=>{
        
            setMovie(json.data)
            console.log(json.data)
        })
        .catch(err=>console.log(err))
    }

    const tvShowList = ()=>{
        fetch(`http://localhost:4000/movie?type=Tv Show`)
        .then(res=>res.json())
        .then((json)=>{
        
            setMovie(json.data)
            console.log(json.data)
        })
        .catch(err=>console.log(err))
    }

   
    return (
        <>
        <div>
        <EditModal/>
        <div id='admin-page' className="pb-3">
      
        <div className="type-selector"  >
            <div className='grid col-3' style={{textAlign:"center"}}>
            <div style={{borderRight:"2px solid white"}}>
                     <div onClick={allShows}>All</div>
                </div>
                <div style={{borderRight:"2px solid white"}}>
                     <div onClick={movieList}>Movies</div>
                </div>
                <div>
                    <div onClick={tvShowList}>Tv Show</div>
                </div>
               
            </div>
        </div>
        <p className='grid col-1' style={{justifyItems:'right',paddingRight:'60px',fontSize:'2rem',color:'white'}} onClick={()=>{
            setEditFormVisible({visibility:true,id:0})
        }}>
            <AiFillFileAdd/> 
        </p>
        <table id='content-table' className=''>
            <tr>
                <th>Poster</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Featured</th>
                <th>Promote</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
           {
                
                movie.map(content=>(<MovieRow id={content._id} key={content._id} name={content.name} rating={content.rating} img={content.img} />))
                }
           
        </table>
        
    </div>
    </div>
    </>
    )
}

export default Administration
