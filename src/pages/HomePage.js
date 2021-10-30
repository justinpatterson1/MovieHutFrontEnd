import React from 'react'
import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'
import Search from '../components/Search'
import FeaturedFilms from '../components/FeaturedFilms'
import FeaturedTvShow from '../components/FeaturedTvShow'
import Footer from '../components/Footer'
import NewReleases from '../components/NewReleases'
import NewTvReleases from '../components/NewTvReleases'

const HomePage = () => {
    return (
        <div style={{backgroundColor:'#081c2c'}}>
            <NavBar/>
            <Carousel/>
            <FeaturedFilms/>
            <FeaturedTvShow/>
            <NewReleases/>
            <NewTvReleases/>
            <Footer/>

        </div>
    )
}

export default HomePage
