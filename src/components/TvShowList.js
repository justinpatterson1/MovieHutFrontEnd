import React from 'react'
import { Link } from 'react-router-dom'

const TvShowList = ({img,id}) => {
    return (
        <div>
            <div>
            <Link to={`/MovieDescriptionPage/${id}`}><img src={img} style={{height:"200px",width:"150px"}} /></Link>
            </div>
    </div>
    )
}

export default TvShowList
