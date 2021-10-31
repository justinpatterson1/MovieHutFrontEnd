import React, { useContext } from 'react'
import { useParams, useHistory } from 'react-router'
import MovieContext from '../Context/MovieContext'
import NavBar from '../components/NavBar'
import MovieDescription from '../components/MovieDescription'
import Footer from '../components/Footer'

const MovieDescriptionPage = () => {

   
    return (
        <div>
            <NavBar/>
            <MovieDescription/>
            <Footer/>
        </div>
    )
}

export default MovieDescriptionPage
