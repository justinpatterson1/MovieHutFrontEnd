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

    return (
        <div>
            <div className='grid col-2'>
                <div className='grid col-2'>
                    <img src={description.img} alt="" srcset="" />
                    <div>
                        <div>
                            <h1>{description.name}</h1>
                            <h1>{description.genre}|Other|year</h1>
                            <p>Rating</p>
                        </div>
                    <div>
                            <h2>
                                {description.description}
                            </h2>
                        </div> 
                        <div className='grid col-2'>
                            <div className='p-2 has-background-primary'>Rent</div>
                            <div className='p-2 has-background-primary'>Buy</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MovieDescription
