import React,{useEffect,useContext} from 'react'
import MovieContext from '../Context/MovieContext'
import TvShowList from '../components/TvShowList'

const TvShows = () => {

    const {movie,setMovie} = useContext(MovieContext)

    useEffect(() => {
       
        fetch('http://localhost:4000/movie?type=Tv Show')
        .then(res =>  res.json())
        .then((json)=>{

            setMovie(json.data)
        })

    }, [])

    return (
        <div>
            <div style={{borderBottom:"1px solid #2596be" , paddingBottom:"20px"}}>
                <div className="type-selector"  >
                    <div className='grid col-3' style={{textAlign:"center"}}>
                        <div style={{borderRight:"2px solid #2596be"}}>
                                <div onClick={()=>{
                                    fetch('http://localhost:4000/movie?type=Tv Show')
                                    .then(res =>  res.json())
                                    .then((json)=>{
                            
                                        setMovie(json.data)
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
            <div className='grid col-6' style={{width:'70%',margin:"0 auto"}}>
                {
                    movie.map(movie=>(<TvShowList key={movie._id} id={movie._id} img={movie.img} />))
                }
            </div>
            
        </div>
    )
}

export default TvShows
