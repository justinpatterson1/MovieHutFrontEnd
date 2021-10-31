import React,{useState,useContext} from 'react'
import { FiSearch } from 'react-icons/fi';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiFillCaretDown} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import movieHutLogo from '../assets/images/MovieHutLogo.png'
import Search from '../components/Search';
import TokenContext from '../Context/TokenContext'
import LoginContext from '../Context/LoginContext'
import SearchContext from '../Context/SearchContext';
import {useHistory} from "react-router-dom"


const NavBar = () => {

  const {token,setToken} = useContext(TokenContext)
  const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext)

  const {searchBarVisibility, setSearchBarVisibility}= useContext(SearchContext);
  const[dropDown,setDropdown] = useState(false)

  const redirect = useHistory();

  const onLogout = ()=>
  {

      if(localStorage.getItem("token"))
      {
          localStorage.removeItem("token");
          alert("You have been logged out. Good bye!");
          
          setIsLoggedIn({user:null, status:false});
          //redirect.push("/");
      }


  }
  
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

      {isLoggedIn.user.level === 'Admin'?
          <Link to='/admin' class="navbar-item">
          Admin
        </Link>
        :
        <Link to='/admin' class="navbar-item">
          Admin
        </Link>
      }
    
    
    </div>

    <div class="navbar-end">
      <div class="navbar-item">


        <div class="buttons">
        <div className='mr-4' style={{fontSize:'2rem'}} onClick={()=>{
          setSearchBarVisibility(true)
        }}>
            <FiSearch/>     
        </div>
        
        {!isLoggedIn.status
            ?
            <>
            <Link to='/sign-up' class="button is-primary">
              <strong>Sign Up</strong>
            </Link>
            <Link to='/auth' class="button is-light">
              Log in
            </Link>
            </>
           
            :
            <>
            <Link to={`/cart/${isLoggedIn.user._id}`} class="button is-primary">
               <AiOutlineShoppingCart/>
            </Link>
            <AiFillCaretDown onClick={()=>{
              setDropdown(!dropDown)
            }}/>
            </>
          }
        </div>
      </div>
    </div>
  </div>
</nav>
{isLoggedIn.status?
  
<div className='grid col-1'>
  <div id='drop-down' className={dropDown?"grid":'hide'}>
  <>
          
          <div className='mr-5 grid col-1' style={{justifyItems:'center'}}>
             <Link to='/user'>Profile</Link>
            <Link to="/" onClick={onLogout}>Log Out </Link>
          </div>
          
          </>
  </div>
</div>
:

""
}


<Search setSearchBarVisibility={setSearchBarVisibility} searchBarVisibility={searchBarVisibility} />

 </div>

    )

}

export default NavBar
