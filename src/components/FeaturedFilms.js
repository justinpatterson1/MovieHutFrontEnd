import React,{useState,useEffect} from 'react'
import { useContext } from 'react/cjs/react.development'
import FeaturedFilmList from '../components/FeaturedFilmList'
import FeaturedFilmContext from '../Context/FeaturedFilmContext'
import {FaArrowAltCircleLeft} from 'react-icons/fa'
import {FaArrowAltCircleRight} from 'react-icons/fa'

const FeaturedFilms = () => {
    
    const {featuredFilms,setFeaturedFilms} = useContext(FeaturedFilmContext)
    const [page,setPage] = useState(1)

    const nextPage = (evt)=>{

        evt.preventDefault()

        let i = page+ 1;
        setPage(i)
        console.log(page)
        
        fetch(`http://localhost:4000/movie?type=Movie&featured=true&slideAmt=${i}`)
        .then(res=>res.json())
        .then((json)=>{
            if(json.data.length !=0){
                setFeaturedFilms(json.data)
            }
            
        })
        .catch(err=>{console.log(err)})
    }

    const previousPage = (evt)=>{

        evt.preventDefault()

        let i = page -1
    
        setPage(i)
        console.log(page)
        if(page > 1){
        fetch(`http://localhost:4000/movie?type=Movie&featured=true&slideAmt=${i}`)
        .then(res=>res.json())
        .then((json)=>{
            setFeaturedFilms(json.data)
            console.log(json.data)
            
        })
        .catch(err=>{console.log(err)})
    }
    }

    return (
        <div id="featured-film" className="mt-5 " >
            <div className='container'>
            <div style={{color:"white",width:"90%",margin:"0 auto"}}>
                <div className='grid col-2 mt-4 mb-4' >
                    <p>Featured Movies</p>
                    <p>View All</p>
                </div>
            
                <div className='grid homeScreenPagination' style={{alignItems:'center'}}>
                    <div className='is-size-2' onClick={(evt)=>{
                        previousPage(evt)
                    }}><FaArrowAltCircleLeft/></div>
                    <div  className='grid col-5 ml-6' style={{borderBottom:"1px Solid rgba(37,150,190,1)",paddingBottom:"10px",alignItems:"center"}}>
                        {
                            featuredFilms.map(featured =>(<FeaturedFilmList key={featured._id} id={featured._id} img={featured.img}  name={featured.name} rating={featured.rating} trailer={featured.trailer} />))
                        }
                    </div>
                    <div className='is-size-2' onClick={(evt)=>{
                        nextPage(evt)
                    }}><FaArrowAltCircleRight/></div>
                </div>
               

            </div>
            </div>
        </div>
    )
}

export default FeaturedFilms
