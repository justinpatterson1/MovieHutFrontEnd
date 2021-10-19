import React from 'react'
import { Link } from 'react-router-dom'

const TvShowList = ({img,id}) => {
    return (
        <div>
            <div>
            <Link to={`/MovieDescriptionPage/${id}`}><img src={img} /></Link>
            </div>
    </div>
    )
}

export default TvShowList
