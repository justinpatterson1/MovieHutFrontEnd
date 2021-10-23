import React, { useContext, useEffect,useState } from 'react'
import { useParams, useHistory } from 'react-router'
import MovieContext from '../Context/MovieContext'

const MovieDescription = () => {

    const [description,setDescription] = useState({})

    const {id} = useParams();

    useEffect(() => {
        
        fetch(`http://localhost:4000/movie/${id}`)
        .then(res => res.json())
        .then((json)=>{

            setDescription(json.data);
        })
        .catch(err=>{console.log(`Error:${err}`)})
    }, [])

    const imageStyle =
    {
        backgroundImage:`url(${description.poster})`,
        backgroundPosition:`center center`,
        backgroundSize:`cover`,
        backgroundRepeat:`no-repeat`,
        backgroundAttachment:`local`,
    

    }

    return (
        <div id='description-page' className='container' style={imageStyle}>
            <div style={{position:'relative'}}>
            
            <div className='grid col-2' style={{color:'white', alignItems:'center'}}>
                
                <div className='grid col-2'>
                    <img src={description.img} style={{width:"225px",height:"350px"}} alt="" srcset="" />
                    <div>
                        <div>
                            <h1 className='is-size-3'>{description.name}</h1>
                            <div>{description.genre}|Other|{description.release_date}</div>
                            <p>Rating:{description.rating}/10</p>
                        </div>
                    <div className='mt-4 mb-4'>
                            <h2>
                                {description.description}
                            </h2>
                        </div> 
                        <div className='grid col-2' style={{columnGap:'20px'}}>
                            <div className='p-2 has-background-primary button'>Rent</div>
                            <div className='p-2 has-background-primary button'>Buy</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='iq'></div>
            </div>
        </div>
    )
}

export default MovieDescription
