import React from 'react'

const MovieList = ({img}) => {
    return (
        <div>
            <div>
                <img src={img} onClick={()=>{
                    alert("Hey")
                }}/>
            </div>
        </div>
    )
}

export default MovieList
