import React,{ useContext , useEffect,useState} from 'react'
import MovieContext from '../Context/MovieContext'
import MovieList from '../components/MovieList'
import {BiRightArrow} from 'react-icons/bi'
import {BiLeftArrow} from 'react-icons/bi'


const Movies = () => {

    const {movie,setMovie} = useContext(MovieContext)
    const [moviePageList,setMoviePageList] = useState([])
    const [page,setPage] = useState(1)

    useEffect(() => {
       
        fetch('http://localhost:4000/movie?type=Movie')
        .then(res =>  res.json())
        .then((json)=>{

            setMoviePageList(json.data)
        })

    }, [])

    const nextPage = (evt)=>{

        evt.preventDefault()

        let i = page+ 1;
        setPage(i)
        console.log(page)
        
        fetch(`http://localhost:4000/movie?type=Movie&page=${i}`)
        .then(res=>res.json())
        .then((json)=>{
            if(json.data.length !=0){
                setMoviePageList(json.data)
            }
           
        
            
        })
    }

    const previousPage = (evt)=>{

        evt.preventDefault()

        let i = page -1
    
        setPage(i)
        console.log(page)
        if(page > 1){
        fetch(`http://localhost:4000/movie?type=Movie&page=${i}`)
        .then(res=>res.json())
        .then((json)=>{
            setMoviePageList(json.data)
            console.log(json.data)
            
        })
    }
    }


    return (
        <div style={{backgroundColor:'#081c2c'}}>
            <div style={{borderBottom:"1px solid #2596be" , paddingBottom:"20px"}}>
                <div className="type-selector"  >
                    <div className='grid col-3' style={{textAlign:"center"}}>
                        <div style={{borderRight:"2px solid #2596be"}}>
                                <div onClick={()=>{
                                    fetch('http://localhost:4000/movie?type=Movie')
                                    .then(res =>  res.json())
                                    .then((json)=>{
                            
                                        setMoviePageList(json.data)
                                    })
                                }} >All</div>
                            </div>
                            <div style={{borderRight:"2px solid #2596be"}}>
                                <div >Release Date</div>
                            </div>
                            <div>
                                <div >Recently Added</div>
                            </div>
                        
                        </div>
                    </div>
            </div>
                
                <div className='grid pageNum mt-2' style={{fontSize:'2rem'}}>
                   <div class='leftBtn' style={{justifySelf:'end'}} onClick={(evt)=>{
                       previousPage(evt)
                        
                   }}><BiLeftArrow/></div>
                   <div>{page}</div>
                   <div class='rightBtn' onClick={(evt)=>{
                       nextPage(evt)
                       

                   }}><BiRightArrow/></div>
               </div>
                <div className='grid col-6 pt-6 pb-6' style={{width:'70%',margin:"0 auto", rowGap:'10px',columnGap:'5px', height:'100%'}}>
                    {
                        moviePageList.map(movie=>(<MovieList key={movie._id} id={movie._id} img={movie.img} />))
                    }
                </div>
            
            
        </div>
    )
}

export default Movies
