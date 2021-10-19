import React, { useContext } from 'react'
import { useParams, useHistory } from 'react-router'
import MovieContext from '../Context/MovieContext'
import NavBar from '../components/NavBar'
import MovieDescription from '../components/MovieDescription'

const MovieDescriptionPage = () => {

   
    return (
        <div>
            <NavBar/>
            <MovieDescription/>
        </div>
    )
}

export default MovieDescriptionPage
