import React,{useContext,useEffect,useState} from 'react'
import {AiFillFileAdd} from 'react-icons/ai'
import MovieContext from '../../Context/MovieContext'
import MovieRow from '../Administration Pages/MovieRow'
import EditModal from './EditModal'
import EditFormContext from '../../Context/EditFormContext'
import {BiRightArrow} from 'react-icons/bi'
import {BiLeftArrow} from 'react-icons/bi'
import LoginContext from '../../Context/LoginContext'


const Administration = () => {

    const {movie,setMovie} = useContext(MovieContext);
    const {editFormVisible,setEditFormVisible} = useContext(EditFormContext)
    const {isLoggedIn} = useContext(LoginContext)
    const [adminView,setAdminView] = useState('movie')
    const [page,setPage] = useState(1)
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
        let i = page +1

        fetch(`http://localhost:4000/movie?type=Movie&page=${i}`)
        .then(res=>res.json())
        .then((json)=>{
        
            setMovie(json.data)
            setPage(i)
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

    const nextPage = (evt)=>{

        evt.preventDefault()

        if(adminView === 'movie'){
            let i = page+ 1;
            
            console.log(page)
            
            fetch(`http://localhost:4000/movie?type=Movie&page=${i}`)
            .then(res=>res.json())
            .then((json)=>{
                if(json.data.length !=0){
                    setMovie(json.data)
                    setPage(i)
            }
           
        
            
        })

        }   else {

            let i = page+ 1;
           
            console.log(page)
            
            fetch(`http://localhost:4000/movie?type=Tv Show&page=${i}`)
            .then(res=>res.json())
            .then((json)=>{
                if(json.data.length !=0){
                    setMovie(json.data)
                    setPage(i)
            }
           
        
            
        })

        }    
        
    }

    const previousPage = (evt)=>{

        
        evt.preventDefault()
        if(adminView === 'movie'){
            let i = page -1
    
            
            console.log(page)
            if(page > 1){
            fetch(`http://localhost:4000/movie?type=Movie&page=${i}`)
            .then(res=>res.json())
            .then((json)=>{
                setMovie(json.data)
                setPage(i)
                console.log(json.data)
                
            })
        }
        }else{
            
            let i = page -1;
       
        console.log(page)
        
        if(page > 1){
        fetch(`http://localhost:4000/movie?type=Tv Show&page=${i}`)
        .then(res=>res.json())
        .then((json)=>{
            if(json.data.length !=0){
                setMovie(json.data)
                setPage(i)
            }
           
        
            
        })
        }
     
    }
}
   

useEffect(() => {
    
    fetch(`http://localhost:4000/movie?type=Movie&page=1`)
    .then(res=>res.json())
    .then((json)=>{
    
        setMovie(json.data)
        console.log(json.data)
    })
    .catch(err=>console.log(err))
    

}, [])
    return (
        <>
        <div>
        <EditModal/>
        <div id='admin-page' className="pb-3">
        <h1 className='ml-3 is-size-3 has-text-white'>Welcome,{`${isLoggedIn.user.firstName}  ${isLoggedIn.user.lastName}`}</h1>
        <div className="type-selector"  >
            <div className='grid col-2' style={{textAlign:"center"}}>
            {/* <div style={{borderRight:"2px solid white"}}>
                     <div onClick={allShows}>All</div>
                </div> */}
                <div style={{borderRight:"2px solid white"}}>
                     <div onClick={()=>{
                         movieList()
                        setAdminView('movie')  
                        setPage(1)  
                        }}>Movies</div>
                </div>
                <div>
                    <div onClick={()=>{
                        tvShowList()
                        setAdminView('tv show')
                        setPage(1)
                    }}>Tv Show</div>
                </div>
               
            </div>
        </div>
        <div className='grid pageNum mt-2' style={{fontSize:'2rem' ,alignItems:'center'}}>
                   <div class='leftBtn' style={{justifySelf:'end'}} onClick={(evt)=>{
                      
                      previousPage(evt)

                   }}><BiLeftArrow/></div>
                   <div>{page}</div>
                   <div class='rightBtn' onClick={(evt)=>{
                       
                       nextPage(evt);
                   }}><BiRightArrow/></div>
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
