import React,{useContext} from 'react'
import Administration from '../components/Administration Pages/Administration'
import LoginContext from '../Context/LoginContext'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const AdminPage = () => {
    const {isLoggedIn} = useContext(LoginContext)
    return (
        <div>

            
            <NavBar/>
            <Administration/>
            <Footer/>
        </div>
    )
}

export default AdminPage
