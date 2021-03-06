import React,{useEffect,useContext,useState} from 'react'
import MovieContext from '../Context/MovieContext'
import TvShowList from '../components/TvShowList'
import {BiRightArrow} from 'react-icons/bi'
import {BiLeftArrow} from 'react-icons/bi'

const TvShows = () => {

    const {movie,setMovie} = useContext(MovieContext)

    const [tvShowPageList,setTvShowPageList] = useState([])

    const [page,setPage] = useState(1)

    const [filter,setFilter] = useState('all')

    
        useEffect(() => {
       
            fetch('http://localhost:4000/movie?type=Tv Show')
            .then(res =>  res.json())
            .then((json)=>{
    
                setTvShowPageList(json.data)
            })
    
        }, [])
    
        const nextPage = (evt)=>{
    
            evt.preventDefault()
    
            let i = page+ 1;
            
            console.log(page)
    
            if(filter === 'all'){
                fetch(`http://localhost:4000/movie?type=Tv Show&page=${i}`)
            .then(res=>res.json())
            .then((json)=>{
                if(json.data.length !=0){
                    setTvShowPageList(json.data)
                    setPage(i)
                }
               
            
                
            })
            }else if(filter==='releaseDate'){
                fetch(`http://localhost:4000/movie?type=Tv Show&sort=-1&p=${i}`)
                .then(res=>res.json())
                .then((json)=>{
                    if(json.data.length !=0){
                        setTvShowPageList(json.data)
                    setPage(i)
                    console.log(json.data)
                    }
                })
                }
            
            
        }
    
        const previousPage = (evt)=>{
    
            evt.preventDefault()
    
            let i = page -1
        
           
            console.log(page)
            if(page > 1){
                if(filter==='all'){
                    fetch(`http://localhost:4000/movie?type=Tv Show&page=${i}`)
                    .then(res=>res.json())
                    .then((json)=>{
                        setTvShowPageList(json.data)
                        setPage(i)
                        console.log(json.data)
                        
                    })
                }
    
        else if(filter==='releaseDate'){
            fetch(`http://localhost:4000/movie?type=Tv Show&sort=-1&p=${i}`)
            .then(res=>res.json())
            .then((json)=>{
                setTvShowPageList(json.data)
                setPage(i)
                console.log(json.data)
            })
            }
        }
        }
        
    return (
        <div style={{backgroundColor:'#081c2c'}}>
            <div style={{borderBottom:"1px solid #2596be" , paddingBottom:"20px"}}>
                <div className="type-selector"  >
                    <div className='grid col-2' style={{textAlign:"center"}}>
                        <div style={{borderRight:"2px solid #2596be"}}>
                                <div onClick={()=>{
                                    fetch('http://localhost:4000/movie?type=Tv Show')
                                    .then(res =>  res.json())
                                    .then((json)=>{
                            
                                        setTvShowPageList(json.data)
                                        setFilter('all')
                                        setPage(1)
                                    })
                                }} >All</div>
                            </div>
                            <div >
                                <div onClick={()=>{
                                     fetch('http://localhost:4000/movie?type=Tv Show&sort=-1&p=1')
                                     .then(res =>  res.json())
                                     .then((json)=>{
                             
                                        setTvShowPageList(json.data)
                                         setFilter('releaseDate')
                                         setPage(1)
                                     })
                                }} >Release Date</div>
                            </div>
                            
                        
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
                <div className='grid col-6 pt-6 pb-6' style={{width:'70%',margin:"0 auto",rowGap:'10px',columnGap:'5px'}}>
                    {
                        tvShowPageList.map(movie=>(<TvShowList key={movie._id} id={movie._id} img={movie.img} />))
                    }
                </div>
            
            
            
        </div>
    )
}

export default TvShows
