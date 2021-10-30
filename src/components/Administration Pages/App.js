import {useState,useEffect} from'react';
import jwt_decode from "jwt-decode"

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import SuperheroContext from "../context/heroContext";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import RegistrationPage from "../pages/RegistrationPage";
import SuperheroListngPage from "../pages/SuperheroListingPage";
import SuperheroDescriptionPage from "../pages/SuperheroDescriptionPage";
import LoginPage  from '../pages/LoginPage';
import AdminDashboardPage from "../pages/AdminSuperheroesPage";
import AdminSuperheroesAddPage from "../pages/AdminSuperheroesAddPage";
import AdminSuperheroesEditPage from "../pages/AdminSuperheroesEditPage";
import ProtectedRoute from './ProtectedRoute';

import "../assets/css/App.css";
import "../assets/css/utilities.css";


const App = () => {

  const [superheroes , setSuperheroes] = useState([{}]);
  const [isLogin, setIsLogin] = useState({
      status:false,
      user:{

      }
  });

  useEffect(()=>{
    try
    {
        const token =localStorage.getItem("token");
        const currentLoggedInUser = jwt_decode(token);
        setIsLogin({ user:currentLoggedInUser, status:true});
    }
    catch(err){}

  },[])

  return (

    <SuperheroContext.Provider value={{superheroes, setSuperheroes,isLogin,setIsLogin}}>
       
        <Router>

                <Switch>
                    <Route exact path="/">

                        <HomePage/>

                    </Route>

                    <Route exact path="/about">
                       
                        <AboutPage/>

                    </Route>

                    <Route exact path="/register">

                        <RegistrationPage/>

                    </Route>

                    <Route exact path="/superheroes">

                        <SuperheroListngPage/>

                    </Route>

                    <Route exact path="/login">

                        <LoginPage/>

                    </Route>

                    <Route exact path="/superheros/details/:id">

                        <SuperheroDescriptionPage/>

                    </Route>

                   
                   
                    <ProtectedRoute path="/admin/dashboard" role="admin" component={AdminDashboardPage}/>

            
                    <ProtectedRoute  path="/user/dashboard" role="user" component={(<h1>User Dashboard</h1>)}/>

       
                    <Route exact path="/admin/dashboard/add">

                         <AdminSuperheroesAddPage/>

                    </Route>

                    <Route exact path="/admin/dashboard/edit">

                        <AdminSuperheroesEditPage/>

                    </Route>


                </Switch>


        </Router>

    </SuperheroContext.Provider>
        
   
    
            
   
  )
}

export default App


