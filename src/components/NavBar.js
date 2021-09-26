import React from 'react'
import { FiSearch } from 'react-icons/fi';
import movieHutLogo from '../assets/images/MovieHutLogo.png'
const NavBar = () => {
    return (
        <div id=''>
            <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src={movieHutLogo} width="112" height="50"/>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Movies
      </a>

      <a class="navbar-item">
        TV Shows
      </a>
    
    </div>

    <div class="navbar-end">
      <div class="navbar-item">


        <div class="buttons">
        <div className='mr-4' style={{fontSize:'2rem'}}>
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
        </div>
    )
}

export default NavBar
