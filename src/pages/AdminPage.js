import React,{useContext} from 'react'
import Administration from '../components/Administration Pages/Administration'
import LoginContext from '../Context/LoginContext'
import NavBar from '../components/NavBar'

const AdminPage = () => {
    const {isLoggedIn} = useContext(LoginContext)
    return (
        <div>

            <h1>Welcome{`${isLoggedIn.user.firstName}  ${isLoggedIn.user.lastName}`}</h1>
            <NavBar/>
            <Administration/>
        </div>
    )
}

export default AdminPage
