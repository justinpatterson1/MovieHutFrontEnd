import React,{useState,useEffect} from 'react'
import '../assets/css/App.css';
import MovieContext from '../Context/MovieContext'
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import MoviesPage from '../pages/MoviePage';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import MovieDescriptionPage from '../pages/MovieDescriptionPage';
import TvShowPage from '../pages/TvShowPage';
import EditFormContext from '../Context/EditFormContext';
import UpdateContext from '../Context/UpdateContext';
import FormInputContext from '../Context/FormInputContext';
import FlyerContext from '../Context/FlyerContext'
import FeaturedFilmContext from '../Context/FeaturedFilmContext';
import FeaturedTvShowContext from '../Context/FeaturedTvShowContext'



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
  const [editFormVisible,setEditFormVisible] = useState({visibility:false, id:0});
  const [featuredFilms,setFeaturedFilms] = useState([])
  const [FeaturedTvShows,setFeaturedTvShows] = useState([])
  const [update,setUpdate] = useState(false);
  
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
    img:""
})

useEffect(() => {
  fetch(`http://localhost:4000/movie?promoted=true`)
  .then(res=>res.json())
  .then((json)=>{
  
      setFlyer(json.data)
      console.log(json.data)
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
            <Route exact path="/admin">

              <AdminPage/>

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
            

            </Switch>
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
