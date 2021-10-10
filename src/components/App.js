import React,{useState,useEffect} from 'react'
import '../assets/css/App.css';
import MovieContext from '../Context/MovieContext'
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import EditFormContext from '../Context/EditFormContext';
import UpdateContext from '../Context/UpdateContext';
import FormInputContext from '../Context/FormInputContext';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'




function App() {

  const [editFormVisible,setEditFormVisible] = useState({visibility:false, id:0});
  const [update,setUpdate] = useState(false);

  const [movie,setMovie] = useState([{
    name:"",
    rating:0,
    price:0,
    featured:false,
    description:"",
    type:"movie",
    genre:"",
    trailer:""
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

            </FormInputContext.Provider>
          </UpdateContext.Provider>
         </EditFormContext.Provider>
        </MovieContext.Provider>
    </Router>
    </div>
  );
}

export default App;
