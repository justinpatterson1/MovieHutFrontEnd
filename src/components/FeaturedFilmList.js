import React from 'react'
import MovieDescriptionPage from '../pages/MovieDescriptionPage'
import { Link } from 'react-router-dom'

const FeaturedFilmList = ({id,img,name,rating,trailer}) => {
    return (
        <div >
            <div>
                <div>
                    <Link to={`/MovieDescriptionPage/${id}`}> <img src={img} alt="" style={{height:'300px'}} /></Link>
                </div>
               
            </div>
        </div>
    )
}

export default FeaturedFilmList
