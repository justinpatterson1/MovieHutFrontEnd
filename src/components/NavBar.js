import React,{useState} from 'react'
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import movieHutLogo from '../assets/images/MovieHutLogo.png'
import Search from '../components/Search';
const NavBar = () => {

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
          <a class="button is-primary">
            <strong>Sign Up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
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
