import React,{useState,useEffect} from 'react'
import '../assets/css/App.css';
import MovieContext from '../Context/MovieContext';
import ProtectedRoute from "../components/ProtectedRoute"
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import MoviesPage from '../pages/MoviePage';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';
import SearchPage from '../pages/SearchPage';
import MovieDescriptionPage from '../pages/MovieDescriptionPage';
import TvShowPage from '../pages/TvShowPage';
import EditFormContext from '../Context/EditFormContext';
import UpdateContext from '../Context/UpdateContext';
import FormInputContext from '../Context/FormInputContext';
import FlyerContext from '../Context/FlyerContext'
import FeaturedFilmContext from '../Context/FeaturedFilmContext';
import FeaturedTvShowContext from '../Context/FeaturedTvShowContext';
import TokenContext from '../Context/TokenContext'
import LoginContext from '../Context/LoginContext';
import SearchContext from '../Context/SearchContext';
import NewReleasesContext from '../Context/NewReleasesContext';
import UserPage from '../pages/UserPage'


import jwtDecode from 'jwt-decode';



import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import SignUp from './Administration Pages/SignUp';




function App() {


  const [isLoggedIn, setIsLoggedIn] =useState({

    status:false,
    user:{}
  })

  useEffect(()=>{


    if( localStorage.getItem('token'))
    {
      try
      {
        const token = localStorage.getItem("token");
        const currentLoggedInUser = jwtDecode(token);
      
        //update my state loggedIn to reflect that a user was logged in
        setIsLoggedIn({status:true,user:currentLoggedInUser})

        
      }
      catch(err){}


    }




  },[])



  const [editFormVisible,setEditFormVisible] = useState({visibility:false, id:0});
  const [featuredFilms,setFeaturedFilms] = useState([])
  const [FeaturedTvShows,setFeaturedTvShows] = useState([])
  const [NewReleases,setNewReleases] = useState([])
  const [NewTvReleases,setNewTvReleases] = useState([])
  const [update,setUpdate] = useState(false);
  const [token,setToken] = useState({})
  const [ searchBarVisibility, setSearchBarVisibility] = useState(false);
  const [flyer,setFlyer] = useState([
   
  ])

  const [movie,setMovie] = useState([{
    name:"",
    rating:0,
    price:0,
    featured:false,
    description:"",
    type:"movie",
    genre:"",
    trailer:"",
    img:""
  }]);

  const[formInput,setFormInput] = useState({    
    name:"",
    rating:0,
    price:0,
    featured:false,
    description:"",
    type:"",
    genre:"",
    trailer:"",
    img:"",
    poster:""
})


useEffect(() => {
  fetch(`http://localhost:4000/movie?promoted=true`)
  .then(res=>res.json())
  .then((json)=>{
  
      setFlyer(json.data)
      console.log(flyer)
  })
  .catch(err=>console.log(err))
  
}, [])

  useEffect(() => {

    fetch(`http://localhost:4000/movie`)
    .then(res=>res.json())
    .then((json)=>{
    
        setMovie(json.data)
        console.log(json.data)
    })
    .catch(err=>console.log(err))
  },[])

  

    useEffect(() => {
       fetch(`http://localhost:4000/movie?type=Movie&featured=true&slideAmt=1`)
       .then(res=>res.json())
       .then((json)=>{
           setFeaturedFilms(json.data)
           console.log(json.data)
       })
    }, [])

    useEffect(() => {
      fetch(`http://localhost:4000/movie?type=Tv Show&featured=true&slideAmt=1`)
      .then(res=>res.json())
      .then((json)=>{
          setFeaturedTvShows(json.data)
          console.log(json.data)
      })

  
      console.log(token)
   }, [])

   useEffect(() => {
    fetch(`http://localhost:4000/movie?type=Movie&sort=-1&slideAmt=1`)
    .then(res=>res.json())
    .then((json)=>{
      setNewReleases(json.data)
        console.log(json.data)
    })

    
    console.log(token)
 }, [])

 useEffect(() => {
  fetch(`http://localhost:4000/movie?type=Tv Show&sort=-1&slideAmt=1`)
  .then(res=>res.json())
  .then((json)=>{
    setNewTvReleases(json.data)
      console.log(json.data)
  })

  
  console.log(token)
}, [])

  return (
    <div >
       
         
        <Router> 

        <MovieContext.Provider value={{movie,setMovie}}>
         <EditFormContext.Provider value={{editFormVisible,setEditFormVisible}}>
           <UpdateContext.Provider value={{update,setUpdate}}>
             <FormInputContext.Provider value={{formInput,setFormInput}}>
               <FlyerContext.Provider value={{flyer,setFlyer}}>
                 <FeaturedFilmContext.Provider value={{featuredFilms,setFeaturedFilms}}>
                   <FeaturedTvShowContext.Provider value={{FeaturedTvShows,setFeaturedTvShows}}>
                     <TokenContext.Provider value={{token,setToken}}>
                        <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
                          <SearchContext.Provider value={{searchBarVisibility, setSearchBarVisibility}}>
                            <NewReleasesContext.Provider value={{NewReleases,setNewReleases,NewTvReleases,setNewTvReleases}}>
          <Switch>

            <Route exact path="/">

                <HomePage/>

            </Route>

            <Route exact path="/Movies">

              <MoviesPage/>

            </Route>
            <Route exact path="/Tv Shows">

              <TvShowPage/>

            </Route>


            <Route exact path="/MovieDescriptionPage/:id">

                <MovieDescriptionPage/>

            </Route>

            <Route exact path="/sign-up">

                <SignUpPage/>

            </Route>

            <Route exact path="/auth">

                 <LoginPage/>

            </Route>
            
            <Route exact path="/user">

                 <UserPage/>

            </Route>


            <ProtectedRoute  path="/user" role="User" component={( <h1>Welcome</h1>)}/>

        
            <ProtectedRoute  path="/admin" role="Admin" component={<AdminPage/>}/>

  
            <ProtectedRoute  path="/cart/:id" role="User" component={CartPage}/>

   

            </Switch>
                          </NewReleasesContext.Provider>
                        </SearchContext.Provider>
                      </LoginContext.Provider>
                    </TokenContext.Provider>
                  </FeaturedTvShowContext.Provider>
                </FeaturedFilmContext.Provider>
              </FlyerContext.Provider>
            </FormInputContext.Provider>
          </UpdateContext.Provider>
         </EditFormContext.Provider>
        </MovieContext.Provider>
    </Router>
    </div>
  );
}

export default App;
