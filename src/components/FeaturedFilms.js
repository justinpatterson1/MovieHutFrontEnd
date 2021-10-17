import React,{useState,useEffect} from 'react'
import { useContext } from 'react/cjs/react.development'
import FeaturedFilmList from '../components/FeaturedFilmList'
import FeaturedFilmContext from '../Context/FeaturedFilmContext'


const FeaturedFilms = () => {
    
    const {featuredFilms,setFeaturedFilms} = useContext(FeaturedFilmContext)
    return (
        <div id="featured-film" className="mt-5" >
            <div style={{color:"white",width:"90%",margin:"0 auto"}}>
                <div className='grid col-2' >
                    <p>Featured Films</p>
                    <p>View All</p>
                </div>
            
                
                <div  className='grid col-5' style={{borderBottom:"1px Solid rgba(37,150,190,1)",paddingBottom:"10px",alignItems:"center"}}>
                    {
                        featuredFilms.map(featured =>(<FeaturedFilmList key={featured._id} id={featured._id} img={featured.img}  name={featured.name} rating={featured.rating} trailer={featured.trailer} />))
                    }
                </div>

            </div>
        </div>
    )
}

export default FeaturedFilms
