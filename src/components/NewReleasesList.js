import React from 'react'
import { Link } from 'react-router-dom'

const NewReleasesList = ({id,img,name,rating,trailer}) => {
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

export default NewReleasesList
