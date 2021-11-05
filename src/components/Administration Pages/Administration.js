import React,{useContext,useEffect,useState} from 'react'
import {AiFillFileAdd} from 'react-icons/ai'
import MovieContext from '../../Context/MovieContext'
import MovieRow from '../Administration Pages/MovieRow'
import UserRow from '../Administration Pages/UserRow'
import EditModal from './EditModal'
import EditFormContext from '../../Context/EditFormContext'
import {BiRightArrow} from 'react-icons/bi'
import {BiLeftArrow} from 'react-icons/bi'
import {IoIosPersonAdd} from 'react-icons/io'
import LoginContext from '../../Context/LoginContext'


const Administration = () => {

    const {movie,setMovie} = useContext(MovieContext);
    const [user,setUser] = useState([])
    const {editFormVisible,setEditFormVisible} = useContext(EditFormContext)
    const {isLoggedIn} = useContext(LoginContext)
    const [adminView,setAdminView] = useState('movie')
    const [adminSearch,setAdminSearch] = useState([{value:''}])
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

const userList =()=>{

    fetch(`http://localhost:4000/users`)
    .then(res=>res.json())
    .then((json)=>{
    
        setUser(json.data)
        console.log(json.data)
    })
    .catch(err=>console.log(err))
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
            <div className='grid col-3' style={{textAlign:"center"}}>
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
                <div style={{borderRight:"2px solid white"}}>
                    <div onClick={()=>{
                        tvShowList()
                        setAdminView('tv show')
                        setPage(1)
                    }}>Tv Show</div>
                </div>
                <div>
                    <div onClick={()=>{
                        userList()
                        setAdminView('user')
                        setPage(1)
                    }}>Users</div>
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
        <div className='grid admin-search-grid container'>
            <div className='grid col-1 pt-4 ' style={{justifyItems:'center',width:'100%'}}>

                 <input type="search" name="" id="" placeholder='search...' style={{width:'50%'}} value={adminSearch.value} onChange={(evt)=>{
                     if(adminView!=='user'){
                        fetch(`http://localhost:4000/movie?q=${evt.target.value}`)
                        .then(res=>res.json())
                        .then((json)=>{
                            if(!evt.target.value==" "){
                            setMovie(json.data)
                            console.log(json.data)
                            }else{
                                fetch(`http://localhost:4000/movie?type=Movie&page=1`)
                                .then(res=>res.json())
                                .then((json)=>{
                                
                                    setMovie(json.data)
                                    console.log(json.data)
                                })
                                .catch(err=>console.log(err))
                            }
                        })
                        .catch(err => console.log(`error is ${err}`))
                     }else if(adminView==='user'){

                        fetch(`http://localhost:4000/users?q=${evt.target.value}`)
                        .then(res=>res.json())
                        .then((json)=>{
                            if(!evt.target.value==" "){
                            setUser(json.data)
                            console.log(json.data)
                            }else{
                                fetch(`http://localhost:4000/users`)
                                .then(res=>res.json())
                                .then((json)=>{
                                
                                    setUser(json.data)
                                    console.log(json.data)
                                })
                                .catch(err=>console.log(err))
                            }
                        })
                        .catch(err => console.log(`error is ${err}`))
                     }
                 }}/>

            </div>
            
        <div className='grid col-1' style={{justifyItems:'right',justifySelf:'right', width:'100px'}}>

            <div className='grid col-2'>

                  <p  style={{justifyItems:'right',paddingRight:'60px',fontSize:'2rem',color:'white'}} >

                         <IoIosPersonAdd/>

                  </p>
                   

                    <p  style={{paddingRight:'60px',fontSize:'2rem',color:'white'}} onClick={()=>{

                        setEditFormVisible({visibility:true,id:0})

                    }}>
                        
                        <AiFillFileAdd/> 
                    </p>
            </div>
         
        </div>
        </div>
       
       
        
           {adminView==='movie'|| adminView=='tv show'?

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
            {  movie.map(content=>(<MovieRow id={content._id} key={content._id} name={content.name} rating={content.rating} img={content.img} promoted={content.promoted}  featured={content.featured}/>))}
            </table>
                
              
                :
                <table id='content-table' className=''>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Cart</th>
                    <th>Purchased</th>
                    <th>Rented</th>

                 </tr>
               { user.map((content,i)=>(<UserRow id={i} key={content._id} firstname={content.firstName} lastname={content.lastName} address={content.address} email={content.email} />))}
                </table>
           
           }
           
        
        
    </div>
    </div>
    </>
    )
}

export default Administration
