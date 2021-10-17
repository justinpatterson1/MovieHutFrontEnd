import React, { useContext } from 'react'
import FlyerContext from '../Context/FlyerContext'


const Slide = ({slides,id,img}) => {
    const{flyer,setFlyer} = useContext(FlyerContext)
    console.log(flyer)

    return (
        <div>
            <img src={img}/>
        </div>
    )
}

export default Slide
