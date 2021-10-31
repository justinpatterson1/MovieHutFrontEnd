import React from 'react'
import NavBar from '../components/NavBar'
import Movies from '../components/Movies'
import Footer from '../components/Footer'

const MoviePage = () => {
    return (
        <div style={{height:'100%'}}>
           < NavBar/>
           < Movies />
           <Footer/>
        </div>
    )
}

export default MoviePage
