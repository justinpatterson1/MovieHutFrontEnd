import React,{useState,useContext} from 'react'
import { FiSearch } from 'react-icons/fi';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import movieHutLogo from '../assets/images/MovieHutLogo.png'
import Search from '../components/Search';
import TokenContext from '../Context/TokenContext'
const NavBar = () => {

  const {token,setToken} = useContext(TokenContext)
  const [ searchBarVisibility, setSearchBarVisibility] = useState(false)
  
    return (
        <div id='nav'>
            <nav className="navbar mb-0" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <Link to='/' class="navbar-item" >
      <img src={movieHutLogo} width="112" height="50"/>
    </Link>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <Link to="/" class="navbar-item">
        Home
      </Link>

      <Link to='/Movies' class="navbar-item">
        Movies
      </Link>

      <Link to='/Tv Shows' class="navbar-item">
        TV Shows
      </Link>

      <Link to='/admin' class="navbar-item">
          Admin
      </Link>
    
    </div>

    <div class="navbar-end">
      <div class="navbar-item">


        <div class="buttons">
        <div className='mr-4' style={{fontSize:'2rem'}} onClick={()=>{
          setSearchBarVisibility(true)
        }}>
            <FiSearch/>     
        </div>
        
        {token
            ?
          
          <Link to={`/cart/${token.id}`} class="button is-primary">
               <AiOutlineShoppingCart/>
          </Link>
          :
          <>
          <Link to='/sign-up' class="button is-primary">
            <strong>Sign Up</strong>
          </Link>
          <Link to='/auth' class="button is-light">
            Log in
          </Link>
          </>

          
          }
        </div>
      </div>
    </div>
  </div>
</nav>
<Search setSearchBarVisibility={setSearchBarVisibility} searchBarVisibility={searchBarVisibility} />
        </div>
    )
}

export default NavBar
