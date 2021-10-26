import React from 'react'
import { Link } from 'react-router-dom'
import MovieDescriptionPage from '../pages/MovieDescriptionPage'

const FeaturedTvShowList = ({img,id}) => {
    return (
        <div>
             
                <div>
                    <div>
                        <Link to={`/MovieDescriptionPage/${id}`}> <img src={img} alt="" style={{height:'300px'}} /></Link>
                    </div>
                
                </div>
            
        </div>
    )
}

export default FeaturedTvShowList
