import React from 'react'

const TvShowList = ({img}) => {
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

export default TvShowList
