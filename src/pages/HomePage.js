import React from 'react'
import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'
import Search from '../components/Search'
import FeaturedFilms from '../components/FeaturedFilms'

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <Carousel/>
            <FeaturedFilms/>

        </div>
    )
}

export default HomePage
