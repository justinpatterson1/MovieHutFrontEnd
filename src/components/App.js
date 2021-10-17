import React,{useState,useEffect} from 'react'
import '../assets/css/App.css';
import MovieContext from '../Context/MovieContext'
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import EditFormContext from '../Context/EditFormContext';
import UpdateContext from '../Context/UpdateContext';
import FormInputContext from '../Context/FormInputContext';
import FlyerContext from '../Context/FlyerContext'

import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'




function App() {

  const [editFormVisible,setEditFormVisible] = useState({visibility:false, id:0});
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

  return (
    <div >
       
         
        <Router> 

        <MovieContext.Provider value={{movie,setMovie}}>
         <EditFormContext.Provider value={{editFormVisible,setEditFormVisible}}>
           <UpdateContext.Provider value={{update,setUpdate}}>
             <FormInputContext.Provider value={{formInput,setFormInput}}>
               <FlyerContext.Provider value={{flyer,setFlyer}}>
          <Switch>

            <Route exact path="/">

                <HomePage/>

            </Route>

            <Route exact path="/admin">

              <AdminPage/>

            </Route>

            <Route exact path="">

              

            </Route>

            </Switch>

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
