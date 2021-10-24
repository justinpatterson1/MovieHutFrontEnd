import React from 'react'
import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'
import Search from '../components/Search'
import FeaturedFilms from '../components/FeaturedFilms'
import FeaturedTvShow from '../components/FeaturedTvShow'

const HomePage = () => {
    return (
        <div style={{backgroundColor:'#081c2c'}}>
            <NavBar/>
            <Carousel/>
            <FeaturedFilms/>
            <FeaturedTvShow/>

        </div>
    )
}

export default HomePage
